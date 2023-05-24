import { Usuarios } from "./db.mjs";


async function controllerUsuarioPost(request,response){
 try{
    const usuarios = await Usuarios.create(request.body)
    response.setHeader("Content-Type","application/json")
    response.status(201)
    response.json(usuarios.toJSON())
 } catch(error){
    response.status(500)
    response.send(fallo)
 }
}




export{
    controllerUsuarioPost
}