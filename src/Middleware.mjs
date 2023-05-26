function authorizacion (request,response,next){
    const [,tokenJSON] = request.headers.authorizacion?.split(" ")
    const token = JSON.parse(tokenJSON)
    if ( token.id){
        response.locals.token =token
        return next()
  
    }else{
        response.sendStatus(403)

    }
}
export{
    authorizacion
}