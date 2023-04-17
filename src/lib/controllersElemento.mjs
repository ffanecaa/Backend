import {Element} from "./db.mjs"



async function ControllerElementGet(peticion,resposta){
    if(peticion.query.id){
    try{
     const Element =await Element.findByPK(peticion.query.id)
     resposta.setHeader('content-type','application/json')
     resposta.status(200)
     resposta.send(Element.toJSON)
    }catch(error){
     resposta.status(500)
     resposta.send('fallo')
    }

} else{
    try{
        const TodosOsElementos = await Element.findAll()
        resposta.SetHeader('content-type','application/json')
        resposta.status(200)
        resposta.send(TodosOsElementos.toJSON())// metodo mas rapido con grandes datos// 
       // resposta.send(JSON.stringify(TodosOsElementos)) 
    } catch(error){
        resposta.status(500)
        resposta.send('error')
    }
}
}

async function ControllerElementPost(peticion,resposta){
    try{
   const Element = await Element.create(peticion.body)
   resposta=setHeader('content-type','application/json')
   resposta.status(200)
   resposta.send(Element.toJSON())


}catch(error){
   resposta.status(500)
   resposta.send('error')
}


}


export{
    ControllerElementGet,
    ControllerElementPost
}