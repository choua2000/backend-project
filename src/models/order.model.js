const {DataTypes} = require('sequelize')
const sequelize = require('../configs/database')
const Order = sequelize.define(
    'order',
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        o_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        type:{
            type:DataTypes.STRING,
            allowNull:false
        },
        data:{
            type:DataTypes.STRING,
            allowNull:false
        }

},{sequelize,timestamps:true});

module.exports = Order;