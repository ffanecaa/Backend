import {Icon} from "./db.mjs"

async function controllerIconPost(request,response){
    try{
   const icons = await Icon.create(request.body)
   response.setHeader('Content-Type','application/json')
   response.status(201)
   response.json(icons.toJSON())


}catch(error){
   response.status(500)
   response.send('falloposticon')
}


}
//----------------------------get------------------------------------------

async function controllerIconGet(peticion,response){
    if(peticion.query.id){
    try{
     const iconos =await Icon.findByPk(peticion.query.id)
     response.setHeader("Content-Type","application/json")
     response.status(200)
     response.send(JSON.stringify(iconos))
    }catch (error){
     response.status(500)
     response.send('falloget')
    }

} else{
    try{
        const TodosOsicons = await Icon.findAll()
        response.setHeader('Content-Type','application/json')
        response.status(200)
        //resposta.send(TodosOsElementos.toJSON())// metodo mas rapido con grandes datos// ??
        response.send(JSON.stringify(TodosOsicons)) 
    } catch(error){
        response.status(500)
        response.send('falloss')
    }
}
}

















export{
    controllerIconPost,
    controllerIconGet
}
