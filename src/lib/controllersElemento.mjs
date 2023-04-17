import {Element} from "./db.mjs"



async function controllerElementGet(peticion,resposta){
    if(peticion.query.id){
    try{
     const elemento =await Element.findByPk(peticion.query.id)
     resposta.setHeader("Content-Type","application/json")
     resposta.status(200)
     resposta.send(JSON.stringify(elemento))
    }catch (error){
     resposta.status(500)
     resposta.send('falloget')
    }

} else{
    try{
        const TodosOsElementos = await Element.findAll()
        resposta.setHeader('Content-Type','application/json')
        resposta.status(200)
        //resposta.send(TodosOsElementos.toJSON())// metodo mas rapido con grandes datos// 
        resposta.send(JSON.stringify(TodosOsElementos)) 
    } catch(error){
        resposta.status(500)
        resposta.send('falloss')
    }
}
}
//post -----------------------------------------//

async function controllerElementPost(request,resposta){
    try{
   const elementos = await Element.create(request.body)
   resposta.setHeader('Content-Type','application/json')
   resposta.status(201)
   resposta.json(elementos.toJSON())


}catch(error){
   resposta.status(500)
   resposta.send('fallopost')
}


}


export{
    controllerElementGet,
    controllerElementPost
}