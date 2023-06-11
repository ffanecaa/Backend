




import {Op} from "sequelize"
import {Element} from "./db.mjs"
// let page = 1
// let limit= 10
// let offset = limit*(page-1)
async function controllerPax(request,response){
    if(request.query.name){
try{
   
 const elements = await Element.findAll({
  where:{
   
//    [Op.substring]:[{"name":request.query.name}]
"name":{
    [Op.like]: `%${request.query.name}%`
}
  }
//   limit:limit,
//   offset: offset
 })

 response.setHeader("Content-Type","application/json")
 response.status(200)
 response.send(JSON.stringify(elements))

}catch{
    console.log(error)
    response.status(500)
    response.send('error')
}


}}












export {controllerPax}