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
// --------------delete usuarios-------

async function controlleDeleteUsuario (request,response){
   try{
  const usuarios = await Usuarios.findByPk(request.body.id)
  await usuarios.destroy()
  response.status(200)
response.send('ok')
}catch(error){
 response.status(500)
 response.send('erroress')
   }
}







//----------  conttrol sesion ------------------

async function controllerSesion(request,response){
   try{
      const usuarios = await Usuarios.findOne({
         where:
          {name:request.body.name}
      })
      if(usuarios){
         response.status(usuarios.password === request.body.password ? 200:401)
         response.json(usuarios.password === request.body.password ?{id:usuarios.id}:" ")
      } else{
         response.sendstatus(401)
      }
    
   } catch(error){
      response.status(401)
      response.send(fallo)
   }
  }


export{
    controllerUsuarioPost,
    controlleDeleteUsuario,
    controllerSesion
}