import express from "express";
import {addNewProduct} from '../controller/productController'

const routes=(app)=>{
        app.route('/contact')
        .get((req,res)=>
            res.send('Get request is succesfull siva!'))
        .post(addNewProduct);
      
        
}
export default routes ;