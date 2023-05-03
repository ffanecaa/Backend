import { Element } from "./db.mjs";


async function controllerlink(request,response){
    try{
       
        const elemento= await Element.findOne(request.body.id)
        response.setHeader("Content-Type","application/json")
        response.status(200)
        response.send(JSON.stringify(elemento))
       }catch (error){
           response.status(500)
           response.send('falloget')
       }
    }
export {
    controllerlink
}