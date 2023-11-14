const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')
const Product = sequelize.define('product',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    },
    detail:{
        type:DataTypes.STRING,
        allowNull:false
    },

},{sequelize,timestamps:true})

module.exports = Product;