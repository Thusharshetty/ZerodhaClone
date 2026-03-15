const {model} =require("mongoose");
const {OrderSchema}=require("../Schemas/Orderschema");;

const OrderModel=model("order",OrderSchema);
module.exports=OrderModel;