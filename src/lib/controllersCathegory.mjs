import { Cathegory } from "./db.mjs";



async function controllerCathegoryPost(request,response){
    try{
        const cathegory = await Cathegory.create(request.body)
        response.setHeader("Content-Type","application/json")
        response.status(201)
        response.json(cathegory.toJSON())

    }catch(error){
        response.status(500)
        response.send('fallo')
    }
}
//-------------------------get
async function controllerCathegoryGet(request,response){
    if(request.query.id){
    try{
     const cathegory = await Cathegory.findByPk(request.query.id)
     response.setHeader("Content-Type","application/json")
     response.status(200)
     response.send(JSON.stringify(cathegory))
    }catch (error){
        response.status(500)
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


//-----------------------------------------delete

async function controllerCathegoryDelete (request ,response){
    try{
        const cathegory = await Cathegory.findByPk(request.query.id)
        await cathegory.destroy()
        response.status(200)
        response.send('ok')
    } catch(error){
        console.log(error)
        response.status(500)
        response.send('error')
    }
}




export
{controllerCathegoryPost,
controllerCathegoryGet,
controllerCathegoryDelete}