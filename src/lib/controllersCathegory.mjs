import { Cathegory } from "./db.mjs";



async function controllerCathegoryPost(request,response){
    try{
        const cathegory = await Cathegory(request.body)
        response.setHeader("Content-Type","application/json")
        response.status(201)
        response.send(cathegory.toJSON())
    }catch(error){
        response.status(501)
        response.send('fallo')
    }
}











export{controllerCathegoryPost}