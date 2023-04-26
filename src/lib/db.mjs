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
})

const Cathegory = db.define('Cathegory',{
    name:{
        type:DataTypes.STRING
    },
    description: {
        type:DataTypes.TEXT
    }
})

const Element = db.define('Element',{
    name:{
        type:DataTypes.STRING
    },
    description:{
        type: DataTypes.TEXT
    },
    latitude:{
        type:DataTypes.FLOAT
    },
    longitude:{
        type:DataTypes.FLOAT
    },
    icon:{
        type:DataTypes.STRING
    }
});

Icon.hasMany(Element, {foreignKey: "icon"})
Element.belongsTo(Icon, {foreignKey: "icon"})

Cathegory.belongsToMany(Element, { through: 'CathegoryElement'})
Element.belongsToMany(Cathegory, { through: 'CathegoryElement'})

await db.query('PRAGMA foreign_keys = false;');
//await db.sync ({alter:true})
await db.sync ()
await db.query('PRAGMA foreign_keys = true;');



export{
    Icon,
    Cathegory,
    Element,
}
