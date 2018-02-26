const XLSX = require('xlsx')
const hdbClientModule = require('./../helpers/hdb-client')
const hdbClient = hdbClientModule.default
const clientConnect = hdbClientModule.clientConnect
const clientExec = hdbClientModule.clientExec

const dataFromStyle = async (style) => {
  if (hdbClient.readyState !== 'connected'){
    await clientConnect()
  }
  const search = `CALL "PA_PRICING_TRX"."SP_CHECK_ESTILO"('${style}')`
  return await clientExec(search)
}

const getDataFromExcel = async (fileBuffer) => {
  const excelFile = XLSX.read(fileBuffer, {type: 'buffer'})
  const jsonExcel = []
  const jsonErrors = []
  for (let name of excelFile.SheetNames){
    let verifier = false
    let data = XLSX.utils.sheet_to_json(excelFile.Sheets[name])
    for (let i = 0, j = 0; i < data.length; i++, j++){
      if (!data[i].Estilo||!data[i].Descripcion){
        jsonErrors.push(`Page ${name}, Line: ${j+2} doesn't have columns either 'Descripcion' or 'Estilo'`)
        data.splice(i--, 1)
      }
      else {
        const getStyle = await dataFromStyle(data[i].Estilo)
          console.log(getStyle);
        if(!Object.keys(getStyle).length){
          jsonErrors.push(`Page ${name}, Line: ${j+2} doesn't have a valid 'Estilo'`)
          data.splice(i--, 1)
        }
        else{
          const dataObject = data.splice(i--,1)
          for (let style of getStyle){
            data.splice(i++, 0, {...style, ...dataObject})
          }
        }
      }
    }
    if(data.length > 0) {
      jsonExcel.push({
        name,
        data
      })
    }
  }
  return {jsonExcel, jsonErrors}
}



exports.excel_reader = (req, res) => {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  if (req.swagger.params.upfile.schema['x-mimetype'] !== req.swagger.params.upfile.value.mimetype){
    res.status(400)
    res.json({message: 'Invalid file type. It has to be a valid XLSX'})
  }
  else {
    getDataFromExcel(req.swagger.params.upfile.value.buffer).then((data) =>{

      if(data.jsonExcel.length < 1){
        res.status(400)
        if(data.jsonErrors.length > 0){
          res.json({message: 'Empty File'})
        }
        else{
          res.json({
            message: 'Bad Formatted File',
            PartialErrors : data.jsonErrors
          })
        }
      }
      else {
        const answer = {
          info: {
            status: `OK${data.jsonErrors.length > 0 ? ' with Errors': ''}`
          },
          data:data.jsonExcel
        }
        if (data.jsonErrors.length > 0){
          answer.PartialErrors = data.jsonErrors
        }
        res.json(answer);
      }
    }).catch((e)=>{
      res.status(500)
      res.json({message: 'Internal Server Error'})
      console.log(e)
    })
  }
}
