

function authorizacion (request,response,next){
    const [,tokenJSON] = request.headers.authorizacion.split(" ")
    const token = JSON.parse(tokenJSON)
    if ( token.id){
        response.locals.token =token  // nos lo da express 
  
    }else{
        response.sendStatus(403)

    }
}
export{
    authorizacion
}

// const [,tokenJSON] aqui con el split desechamos esto 