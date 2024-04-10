




import {Op} from "sequelize"
import {Element} from "./db.mjs"
// let page = 1
// let limit= 10
// let offset = limit*(page-1)
async function controllerPax(request,response){
    console.log(request.query.name)
    if(request.query.name){
try{
   
 const elemento = await Element.findAll({
  where:{
   name:{
    [Op.like]: `%${request.query.name}%`
  }},
   
 })

 response.setHeader("Content-Type","application/json")
 response.status(200)
 response.send(JSON.stringify(elemento))

}catch{
    console.log(error)
    response.status(500)
    response.send('error')
}


}}





async function controllerelementNomepAX(req,res){
    if ( req.query.name){
      try{
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit)
  
       const offset =(page-1)*limit
  
  
        const elements = await Element.findAll({
          offset,
          limit,
          where: {
            "name":{
              [Op.like]: `%${req.query.name}%`
            }
          }
        })
        const nextPage = page + 1;
      const previousPage = page - 1;
      const UrlNext= `/elements/pax/?page=${nextPage}&limit=${limit}&name=${req.query.name}`;
  const UrlPrevious =`/elements/pax/?page=${previousPage}&limit=${limit}&name=${req.query.name}`
        res.status(200).json({
          elements,
         pagination: {
           page,
           limit,
            nextPAge: UrlNext,
            previousPage:UrlPrevious,
         },
       });
      }catch(error){
        console.log(error)
        res.status(500)
        res.send('error')
      }
    }
  }
  
  
  






export {controllerPax,controllerelementNomepAX}