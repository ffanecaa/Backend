import express  from "express";
import cors from "cors"
import {controllerElementGet,controllerElementPost,controllerElementDelete,controllerElementPut,controllerElementID} from "./lib/controllersElemento.mjs"
import {controllerIconPost,controllerIconGet} from "./lib/controllersIcon.mjs";
import {controllerCathegoryPost,controllerCathegoryGet,controllerCathegoryDelete} from "./lib/controllersCathegory.mjs"
import {   controllerIconCathe} from "./lib/controllers-Icon-Cathe.mjs"
import{controllerelementNome} from"./lib/controllerSpecial.mjs"


import{controllerlink, controllerlinkName} from"./lib/controllersLink.mjs"
import { controllerCatheEle} from "./lib/controllerCatheElemento.mjs";
import { controllerUsuarioPost,controlleDeleteUsuario,controllerSesion} from "./lib/controllerUsuarios.mjs";
import {authorizacion} from "./Middleware.mjs"


const app = express()
app.use(cors())
app.use(express.json())
//  ------------------ELEMENTOS--------------------
 app.get("/elements/", authorizacion,controllerElementGet)
app.post("/elements/",authorizacion,controllerElementPost)
app.delete("/elements/",controllerElementDelete)
app.get("/elements/",controllerElementDelete)
app.put("/elements/",controllerElementPut)

app.get("/links/id",controllerElementID)

 //-------------USUARIOS-----------------
app.post("/usuarios/",controllerUsuarioPost)
app.post("/usuarios/sesion/",controllerSesion)
app.delete("/usuarios/",controlleDeleteUsuario)

//------------ICONOS----------------

app.post("/icons/",controllerIconPost)
app.get("/icons/",controllerIconGet)
app.get("/icons/",controllerIconCathe)

app.get("/pax/",controllerelementNome)

app.post("/cathegory/",controllerCathegoryPost)
app.get("/cathegory/",controllerCathegoryGet)
app.delete("/cathegory/",controllerCathegoryDelete)
//este es 
app.get("/link/:id",controllerlink)
app.get("/links/:name",controllerlinkName)

app.get("/cate/",controllerCatheEle)




app.listen(8000, function () {
    console.log("express funcionando")
})

