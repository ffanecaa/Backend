







import {Op} from "sequelize"
import {Element} from "./db.mjs"






async function controllerPax(req,res){
    const pageNumber =Number.parseInt(req.query.page)
    const sizeNumber =Number.parseInt(req.query.size)
let page = 0
      if(!Number.isNaN(pageNumber)&& pageNumber > 0){
        page= pageNumber
      }
let size = 10
      if(!Number.isNaN(sizeNumber) &&
       sizeNumber >0 &&  sizeNumber < 10) {
        size = sizeNumber
       }
      
    const elemento = await Element.findAndCountAll({
        limit:size,
        offset: page *size 
    })
   
    res.send({
        content: elemento.rows,
        totalPages:Math.ceil(elemento.count/size)
    })
    
} 





export{controllerPax}