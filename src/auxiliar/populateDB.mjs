import { createReadStream } from 'fs'

import { appendFile } from "fs/promises"

import Parser from "node-xml-stream"

import { Cathegory, Element, Icon } from "../lib/db.mjs"
import { setInterval } from 'timers/promises'

let icon, cathegory, element, coordinates, currentProperty
let elements = []

const logFilePath = `log-${new Date(Date.now()).toJSON()}.txt`

function log(type,content=""){
    const logHeader = `>>> ${icon}|${cathegory}|${element}|${coordinates}|${currentProperty}|`
    appendFile(logFilePath, logHeader+type+": "+content+"\n")
}

function cleanLists(lists) {
    for (const list of lists){
        for (const [index, item] of list) {
            if ( ! item.isNewRecord ) list.splice(index,1)
        }
    }
}

setInterval(cleanLists,100)

log("starting", "")

const parser = new Parser()

// <tag attr="hello">
// name = 'tag'
// attributes = { attr: 'hello' }
parser.on('opentag', (tagName, attributes) => {
    switch (tagName) {
        case "Style":
            icon = attributes
            break
        case "href":
            currentProperty = "file"
            break
        case "Placemark":
            element = attributes
            break
        case "Folder":
            cathegory = attributes
            break
        case "styleUrl":
            currentProperty = "icon"
            break
        case "coordinates":
            coordinates = true
            break
        default:
            currentProperty = tagName
            break
    }
})

// </tag>
parser.on('closetag', tagName => {
    switch (tagName) {
        case "Style":
            if (icon) {
                Icon.create(icon)
                icon = null
            }
            break;
        case "coordinates":
            coordinates = false
        case "Placemark":
            if (element) {
                elements.push(element)
                element = null
            }
            break;
        case "Folder":
            if (cathegory) {
                const cathegoryElements = elements.map(
                    element => {
                        return {...element, icon: element.icon === "#" ? "Reloxo-de-sol" : element.icon.slice(1)}
                    }
                )
                Cathegory.create(cathegory).then(
                    cathegory => Element.bulkCreate(cathegoryElements).then(
                        elements => cathegory.setElements(elements)
                    )
                )
                elements = []
                cathegory = null
            }
            break;
    }
})

// <tag>TEXT</tag>
parser.on('text', text => {
    if (coordinates) {
        const [lat,lon] = text.split(",")
        element.latitude = lat
        element.longitude = lon
    } else if (element) {
        element[currentProperty] = text
    } else if (cathegory) {
        cathegory[currentProperty] = text
    } else if (icon) {
        icon[currentProperty] = text
    } else {
        log("error","No hay objetos para "+currentProperty+": "+text)
    }
})

// <[[CDATA['data']]>
// cdata = 'data'
parser.on('cdata', cdata => {
    if (element) {
        element[currentProperty] = cdata
    } else if (cathegory) {
        cathegory[currentProperty] = cdata
    } else {
        log("error","No hay objetos para "+currentProperty+": "+cdata)
    }
})

// <?xml version="1.0"?>
// name = 'xml'
// attrs = { version: '1.0' }
parser.on('instruction', (name, attrs) => {
    log("instruction", name, JSON.stringify(attrs))
})

// Only stream-errors are emitted.
parser.on('error', err => {
    log("error",err);
})

parser.on('finish', () => {
    log("Done!")
})

// Pipe a stream to the parser
let stream = createReadStream(process.argv[2])
try {
    stream.pipe(parser)
} catch (excepcion) {
    log("error", excepcion)
}