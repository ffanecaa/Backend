

// function authorizacion (request,response,next){
//     const [,tokenJSON] = request.headers.authorizacion.split(" ")
//     const token = JSON.parse(tokenJSON)
//     if ( token.id){
//         response.locals.token =token  // nos lo da express 
//         next()
//     }else{
//         response.sendStatus(403)

//     }
// }
// export{
//     authorizacion
// }

// const [,tokenJSON] aqui con el split desechamos esto 
import jwt from "jsonwebtoken"

function intermedioAutorization (request, response, next) {
    try {
        const [_, token] = request.headers.authorization.split(" ")
        const datosAutorizacion = jwt.verify(token, process.env.JWT_SECRET)
        response.locals.autorizacion = datosAutorizacion
        return seguinte()
    } catch (error) {
        response.sendStatus(403)
    }
}

export {
    intermedioAutorization
}

