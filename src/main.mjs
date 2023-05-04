import express  from "express";
import cors from "cors"
import {controllerElementGet,controllerElementPost,controllerElementDelete,controllerElementPut,controllerElementID} from "./lib/controllersElemento.mjs"
import {controllerIconPost,controllerIconGet} from "./lib/controllersIcon.mjs";
import {controllerCathegoryPost,controllerCathegoryGet,controllerCathegoryDelete} from "./lib/controllersCathegory.mjs"
import {   controllerIconCathe} from "./lib/controllers-Icon-Cathe.mjs"
import{controllerelementNome} from"./lib/controllerSpecial.mjs"


import{controllerlink} from"./lib/controllersLink.mjs"



const app = express()
app.use(cors())
app.use(express.json())

 app.get("/elements/",controllerElementGet)
app.post("/elements/",controllerElementPost)
app.delete("/elements/",controllerElementDelete)
app.get("/elements/",controllerElementDelete)
app.put("/elements/",controllerElementPut)

app.get("/link/:id/",controllerElementID)



app.post("/icons/",controllerIconPost)
app.get("/icons/",controllerIconGet)
app.get("/icons/",controllerIconCathe)

app.get("/pax/",controllerelementNome)

app.post("/cathegory/",controllerCathegoryPost)
app.get("/cathegory/",controllerCathegoryGet)
app.delete("/cathegory/",controllerCathegoryDelete)

app.get("/link/",controllerlink)



app.listen(8000, function () {
    console.log("express funcionando")
})

