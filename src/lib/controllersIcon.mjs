import {Icon} from "./db.mjs"

async function controllerIconPost(request,resposta){
    try{
   const icon = await Icon.create(request.body)
   resposta.setHeader('Content-Type','application/json')
   resposta.status(201)
   resposta.json(icon.toJSON())


}catch(error){
   resposta.status(500)
   resposta.send('falloposticon')
}


}

















export{
    controllerIconPost
}
