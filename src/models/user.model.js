const {DataTypes} = require('sequelize');
const sequelize = require('../configs/database');
const User = sequelize.define('User',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    u_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tel:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{sequelize,timestamps:true})
module.exports = User;