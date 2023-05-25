import {response} from "express"

function authorizacion (request,response,next){
    const token = request.headers.authorizacion?.split(" ")[1]
    if ( ! request.headers.authorizacion.id){
        response.sendStatus(403)
    }else{
        response.locals.token =token
        return next

    }
}
export{
    authorizacion
}