import{ Cathegory,Element} from "db.mjs"


async function controllerCatheEle ( request,response) {
    try{
        const cathegory = await  Cathegory.findAll(request.body.name, {
            include:  Element
            
        })

        response.setHeader('Content-Type','application/json')
        response.status(200)
        //resposta.send(TodosOsElementos.toJSON())// metodo mas rapido con grandes datos// 
        response.send(JSON.stringify(TodosOsElementos)) 
    } catch(error){
        response.status(500)
        response.send('falloss')
    }
}

export{
    controllerCatheEle
}