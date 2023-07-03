import { Usuarios } from "./db.mjs";
import {hash,compare} from "bcrypt"
import manexadorDeExcepcions from "./excepcions.mjs";
import jwt from "jsonwebtoken"
import { intermedioAutorization } from "./middleware.mjs";


async function controllerUsuarioPost(request,response){
 try{
    const usuarios = await Usuarios.create(request.body)
    response.setHeader("Content-Type","application/json")
    response.status(201)
    response.json(usuarios.toJSON())
 } catch(excepcion){
   manexadorDeExcepcions(excepcion, resposta)
 }
}



//-----------------crypto post-----------------------------------------
   async function controllerCrypto( request,response){
    try{

      const resumoContrasinal = await hash(request.body.password,10)
      const User = {...request.body , resumoContrasinal}
      const usuario = await Usuarios.create(User)
      response.status(201).json(usuario)
    }catch(excepcion){
      manexadorDeExcepcions(excepcion, response)
    }

   }

   /// ---------------------AUTENTIFICACION -----------------------

async function controllercontrasinal (request,response){
   try {
      const usuario = await Usuarios.findOne({
         where:{
            name:request.body.name
         }
      })
      
      if ( usuario === null ) return response.sendStatus(401)

      const autentificado = await compare(
          request.body.password, usuario.resumoContrasinal
      )

      if (autentificado) {
          const paseAutorizacion = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET)
          return response.send(paseAutorizacion)
      }

      return response.sendStatus(401)
      
  } catch (error) {
      return manexadorDeExcepcions(error, response)
  }
}

//--------------------------------------------


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
    controllerSesion,
    controllerCrypto,
    controllercontrasinal
   }