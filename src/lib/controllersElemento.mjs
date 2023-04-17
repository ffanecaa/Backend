import {Element} from "./db.mjs"



async function controllerElementGet(peticion,resposta){
    if(peticion.query.id){
    try{
     const element =await Element.findByPk(peticion.query.id)
     resposta.setHeader("Content-Type","application/json")
     resposta.status(200)
     resposta.send(element.toJSON())
    }catch (error){
     resposta.status(500)
     resposta.send('fallo')
    }

} else{
    try{
        const TodosOsElementos = await Element.findAll()
        resposta.SetHeader('Content-Type','application/json')
        resposta.status(200)
        //resposta.send(TodosOsElementos.toJSON())// metodo mas rapido con grandes datos// 
        resposta.send(JSON.stringify(TodosOsElementos)) 
    } catch(error){
        resposta.status(500)
        resposta.send('fallo')
    }
}
}

async function controllerElementPost(peticion,resposta){
    try{
   const elementos = await Element.create(peticion.body)
   resposta=setHeader('Content-Type','application/json')
   resposta.status(201)
   resposta.send(elementos.toJSON())


}catch(error){
   resposta.status(500)
   resposta.send('fallopost')
}


}


export{
    controllerElementGet,
    controllerElementPost
}