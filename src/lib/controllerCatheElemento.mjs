import {Element,Cathegory} from "./db.mjs"


async function controllerCatheEle ( request,response) {
    try{
        const page = parseInt(request.query.page) ;
        const limit = parseInt(request.query.limit )
        const offset = (page - 1) * limit
        const cathegory = await  Cathegory.findOne({
            offset,
            limit,
            where:{name:request.params.name, },
            include: {model: Element
            }
        })
   
        const nextPage = page + 1;
        const previousPage = page - 1;
        response.setHeader('Content-Type','application/json')
        response.status(200).json({
            cathegory,
        
           pagination: {
             page,
             limit,
             nextPAge: `/pax/?page=${nextPage}&limit=${limit}`,
             previousPage:`/pax/?page=${previousPage}&limit=${limit}`
           },
         }); 
    } catch(error){
        response.status(500)
        response.send('falloss')
    }
}



  export {  

    controllerCatheEle
}