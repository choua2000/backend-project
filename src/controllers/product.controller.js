const Product = require('../models/product.model')

exports.createProduct = async (req, res) => {
  try {
    const { name, price, detail } = req.body;
    if (!name || !price || !detail) {
      return res.status(404).json({ message: "please input your data" })
    }
    const data = await Product.create({
      name,
      price,
      detail
    })
    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}
exports.select = async (req, res) => {
  try {
    await Product.findAndCountAll({}).then((data) => {
      if (data) {
        return res.status(200).json(data)
      }
      return res.status(404).json({ message: "not found" })
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}
exports.getOne = async (req, res) => {
     try {
      const {id} = req.params;
      await Product.findByPk(id).then((data) =>{
        if(data){
          return res.status(200).json(data)
        }
        return res.status(404).json({message:"not found"})
      })
     } catch (error) {
      console.log(error)
      return res.status(500).json({ message: error.message })
     }
}
exports.updateProduct = async (req,res) =>{
  try {
    const {id} = req.params;
    await Product.update({...req.body},{where:{id:id}}).then((updated)=>{
      if(updated){
        return res.status(201).json({message:"updated"})
      }
      return res.status(404).json({message:"not found"})
    })
  } catch (error) {
    console.log(error)
      return res.status(500).json({ message: error.message })
  }
}
exports.deleteProduct = async (req,res) =>{
  try {
    const {id} = req.params;
    await Product.destroy({where:{id:id}}).then((deleted)=>{
      if(deleted){
        return res.status(201).json({message:"deleted success"})
      }
      return res.status(404).json({message:"not found"})
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}