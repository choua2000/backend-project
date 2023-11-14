const Order = require('../models/order.model')
exports.creatorder = async (req,res)=>{
    try {
        await Order.create({...req.body}).then((data)=>{
            if(!data){
                return res.status(404).json({message:"not data"})
            }
            return res.status(200).json(data)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}