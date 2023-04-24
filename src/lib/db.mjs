import {Sequelize, DataTypes} from "sequelize"

const db = new Sequelize ({
    dialect: 'sqlite',
    storage: './Database.sqlite'
})


// generamos base de datos


const Icon = db.define ('Icon',{
    id:{
        type:DataTypes.STRING,
        primaryKey: true
    },
    file:{
        type: DataTypes.STRING
    }
});
const Cathegory = db.define('Cathegory',{

    name:{
        type:DataTypes.STRING
    }
},{timestamp:false}
)

const Element = db.define( 'Element',{

    name:{
        type:DataTypes.STRING
    },
    description:{
        type: DataTypes.TEXT
    },
    latitude:{
        type:DataTypes.FLOAT
    },
    longuitude:{
        type:DataTypes.FLOAT
    }

});

Cathegory.hasOne(Icon)
Icon.belongsTo(Cathegory)

Cathegory.belongsToMany(Element, { through: 'CathegoryElement'})
Element.belongsToMany(Cathegory, { through: 'CathegoryElement'})

await db.sync ({alter:true})


export{
Icon,
Cathegory,
Element,

}
