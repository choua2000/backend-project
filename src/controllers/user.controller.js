const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
exports.createUser = async (req, res) => {
    try {
        const { u_name, email, password, tel } = req.body;
        if (!u_name || !email || !password || !tel) {
            return res.status(404).json({ message: "not found" })
        }
        const isMatch = await User.findOne({ where: { tel } })
        if (isMatch) {
            return res.status(404).json({ message: "exist tel" })
        }
        const newPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            u_name,
            email,
            password: newPassword,
            tel
        })
        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await User.findOne({ where: { email: email } })
        if (!data) {
            return res.status(404).json({ message: "not found" })
        }
        const checkPass = await bcrypt.compare(password, data.password)
        if (!checkPass) {
            return res.status(404).json({ message: "password inccoret" })
        }
        const Token = await jwt.sign({
            u_name: data.u_name,
            email: data.email,
            password: data.password,
            tel: data.tel
        }, 'User', { expiresIn: "24" })
        return res.status(200).json({ message: "successfully", Token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.selectAll = async (req, res) => {
    try {
        const data = await User.findAndCountAll({}).then((data) => {
            if (!data) {
                return res.status(200).json({ message: "not found" })
            }
            return res.status(200).json(data)
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.updateUser = async (req, res) => {
    try {
      const {id} = req.params;
      const {u_name,email,password,tel} =  req.body;
     const data = await User.findByPk(id);
     if(!data){
        return res.status(404).json({message:"not found"})
     }
     const newPassword = await bcrypt.hash(password,10)
     const user = await data.update({
        u_name, 
        email, 
        password:newPassword, 
        tel
     })
     if(user){
        return res.status(200).json(user)
     }
     return res.status(404).json({message:"not data"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.getOne = async(req,res) =>{
    try {
        const {id} = req.params;
       const data = await User.findByPk(id);
        if(data){
            return res.status(200).json(data)
        }
        return res.status(404).json({message:"not found"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.deleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        await User.destroy({where:{id:id}}).then((deleted)=>{
            if(deleted){
                return res.status(201).json({message:"deleted success"})
            }
            return res.status(404).json({message:error.message})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}