import {Icon,Cathegory} from "./db.mjs"



async function controllerIconCathe(request, response) {
    try {
        const icon = await Icon.findAll({
            atributtes: ['id'],
            include: {
                model: 'Cathegory',
                atributtes: ['name']
            }
        })
        response.setHeader("Content-Type", "application/json")
        response.status(200)
        response.send(JSON.stringify(icon))
    } catch (error) {
        response.status(500)
        response.send('falloget')
    }

}


export{
    controllerIconCathe
}