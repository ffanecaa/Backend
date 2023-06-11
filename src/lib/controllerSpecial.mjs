






//////////////////////  controlador paginacion busqueda todos elementos ///////////////////////////////////////////

import {Element} from "./db.mjs"
import {Op} from "sequelize"


  async function controllerelementNome(req, res) {
    try {
      const page = parseInt(req.query.page) ;
      const limit = parseInt(req.query.limit )
   
      const offset = (page - 1) * limit
      const elements = await Element.findAll({
        offset,
        limit
      });
    const nextPage = page + 1;
    const previousPage = page - 1;
      res.status(200).json({
         elements,
        pagination: {
          page,
          limit,
          nextPAge: `/pax/?page=${nextPage}&limit=${limit}`,
          previousPage:`/pax/?page=${previousPage}&limit=${limit}`
        },
      });
    } catch (error) {
      res.status(500)
      res.send("error");
    }
  }
  


/////////////////////////CONTORLADOR NOMBRES PAGINADOS

async function controllerelementNomepAX(req,res){
  if ( req.query.name){
    try{
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit)

     const offset =(page-1)*limit


      const elements = await Element.findAll({
        offset,
        limit,
        where: {
          "name":{
            [Op.like]: `%${req.query.name}%`
          }
        }
      })
      const nextPage = page + 1;
    const previousPage = page - 1;
    const UrlNext= `/elements/pax/?page=${nextPage}&limit=${limit}&name=${req.query.name}`;
const UrlPrevious =`/elements/pax/?page=${previousPage}&limit=${limit}&name=${req.query.name}`
      res.status(200).json({
        elements,
       pagination: {
         page,
         limit,
          nextPAge: UrlNext,
          previousPage:UrlPrevious,
       },
     });
    }catch(error){
      console.log(error)
      res.status(500)
      res.send('error')
    }
  }
}








  

export{controllerelementNome,
  controllerelementNomepAX
}