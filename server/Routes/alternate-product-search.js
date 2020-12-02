import express from 'express';
import ProductModel from '../Models/products.js';

const router = express.Router()

router.get('/:id', (req, res)=>{
    const id = req.params.id
    ProductModel.findById(id).then((response)=>{
        return res.json(response)
    })
})

export default router
