import {Element} from "./db.mjs"



async function controllerElementGet(request,response,authorizacion){
    if(request.query.id){
    try{
     const elemento =await Element.findByPk(request.query.id)
     response.setHeader("Content-Type","application/json")
     response.status(200)
     response.send(JSON.stringify(elemento))
    }catch (error){
        response.status(500)
        response.send('falloget')
    }

} else{
    try{
        const TodosOsElementos = await Element.findAll()
        response.setHeader('Content-Type','application/json')
        response.status(200)
        //resposta.send(TodosOsElementos.toJSON())// metodo mas rapido con grandes datos// 
        response.send(JSON.stringify(TodosOsElementos)) 
    } catch(error){
        response.status(500)
        response.send('falloss')
    }
}
}
//post -----------------------------------------//

async function controllerElementPost(request,response){
    try{
   const elementos = await Element.create(request.body)
   response.setHeader('Content-Type','application/json')
   response.status(201)
   response.json(elementos.toJSON())


}catch(error){
    response.status(500)
    response.send('fallopost')
}


}

//------------------------delete--------------

async function controllerElementDelete(request,response){
try{
const elemento = await Element.findByPk(request.body.id)
await elemento.destroy()
response.status(200)
response.send('ok')
}catch(error){
 response.status(500)
 response.send('erroress')
}

}
//-----------------------------------PUT----------------

async function  controllerElementPut (request,response){
    try{
        const elemento =await Element.findByPk(request.body.id)
        await elemento.update(request.body)
        response.status(200)
        response.send('ok')
    } catch(error){
        response.status(500)
        response.send('error')
    }
}

//----------CONTROLADOR GET PARAMETRO-----------

async function controllerElementID (request,response){
    try{
        const elemento = await Element.findByPk(request.params.id)
        response.setHeader("Content-Type","application/json")
        response.status(200)
        response.send(JSON.stringify(elemento))
    } catch(error){
        response.status(500)
        response.send(error)
        console.log(error)
    }
}










export{
    controllerElementGet,
    controllerElementPost,
     controllerElementDelete,
    controllerElementPut,
    controllerElementID

}
