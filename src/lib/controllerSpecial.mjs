







import {Op} from "sequelize"
import {Element} from "./db.mjs"






// async function controllerPax(req,res){
//     const pageNumber =Number.parseInt(req.query.page)
//     const sizeNumber =Number.parseInt(req.query.size)
// // let page = 0
// //       if(!Number.isNaN(pageNumber)&& pageNumber > 0){
// //         page= pageNumber
// //       }
// // let size = 10
// //       if(!Number.isNaN(sizeNumber) &&
// //        sizeNumber >0 &&  sizeNumber < 10) {
// //         size = sizeNumber
// //        }
      
//     const elemento = await Element.findAndCountAll({
//         limit:size,
//         offset: page *size 
//     })
   
//     res.send({
//         content: elemento.rows,
//         totalPages:Math.ceil(elemento.count/size)
//     })
    
// } 



async function controllerelementNome(req,res){
    if ((req.query.paxina)&& (req.query.unidades)){
    try{
        let offset = unidades*(paxina - 1)
        let limit = unidades
         const elemento = await Element.findAll({offset,limit})
         
      res.setHeader("Content-Type",'application/json')
      res.status(200)
      res.send(peticion.query.elemento)
       }catch(error){
        res.status(500)
        res.send(error)
       }

}
}



export{controllerelementNome
}