import mongoose from "mongoose";
import { ProductSchema } from "../model/productModel";

const Product = mongoose.model("products", ProductSchema);

export const addNewProduct = (req, res) => {
  // let newProduct = new Product({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   emailID: req.body.emailID,
  //   phoneNumber: req.body.phoneNumber
  // });
  console.log("req: "+req.body)
  let newProduct = new Product(req.body);
  console.log("Request is: "+newProduct);

  newProduct.save((err, product) => {
    if (err) {
      console.log("Error is: "+err);
      res.send(err);
    }
    res.json(product);
  });
};
