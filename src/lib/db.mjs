import {Sequelize, DataTypes} from "sequelize"

const db = new Sequelize ({
    dialect: 'sqlite',
    storage: './dabase.sqlite'
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
}
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

Icon.hasMany(Cathegory)
Cathegory.belongsTo(Icon)

Cathegory.belongsToMany(Element, { through: 'CathegoryElement'})
Element.belongsToMany(Cathegory, { through: 'CathegoryElement'})

await db.sync ({alter:true})


export{
Icon,
Cathegory,
Element,
elementos
}
