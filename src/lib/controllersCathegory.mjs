import { Cathegory } from "./db.mjs";



async function controllerCathegoryPost(request,response){
    try{
        const cathegory = await Cathegory(request.body)
        response.setHeader("Content-Type","application/json")
        response.status(201)
        response.json(cathegory.toJSON())
    }catch(error){
        response.status(501)
        response.send('fallo')
    }
}
//-------------------------get
async function controllerCathegoryGet(request,response){
    if(peticion.query.id){
    try{
     const cathegory =await Cathegory.findByPk(peticion.query.id)
     response.setHeader("Content-Type","application/json")
     response.status(200)
     response.send(JSON.stringify(cathegory))
    }catch (error){
        response.status(501)
        response.send('falloget')
    }

} else{
    try{
        const TodasCathegory = await Cathegory.findAll()
        response.setHeader('Content-Type','application/json')
        response.status(200)
        //resposta.send(TodosOsElementos.toJSON())// metodo mas rapido con grandes datos// 
        response.send(JSON.stringify(TodasCathegory)) 
    } catch(error){
        response.status(500)
        response.send('falloss')
    }
}
}









export{controllerCathegoryPost,
controllerCathegoryGet}