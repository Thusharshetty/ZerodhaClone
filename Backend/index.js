require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const HoldingsModel=require("./models/HoldingsModels");
const PositionsModel=require("./models/PostionsModel");
const OrderModel =require("./models/OrdersModel");
const cors=require("cors");
const bodyParser=require("body-parser");
const authRoute=require("./Routes/AuthRoute");
const cookieParser=require("cookie-parser");

const app=express();
app.use(cookieParser());
const PORT=process.env.PORT||3002;
const uri=process.env.MONGO_URL;
app.use(cors(
    {
    origin: ['http://localhost:5173', 'http://localhost:5174','https://zerodha-frontend.vercel.app',    
    /\.vercel\.app$/,// allows ANY vercel.app subdomain
    ] ,
    credentials: true              
}
));
app.use(bodyParser.json());
mongoose.connect(uri)
    .then(() => {
        console.log("DB Connected!");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.log("DB Connection Error:", err));

app.get("/allholdings", async (req, res) => {
     let allHoldings = await HoldingsModel.find({});
     res.json(allHoldings);
});

app.get("/allpositions", async (req, res) => {
     let allPositions = await PositionsModel.find({});
     res.json(allPositions);
});

app.post("/newOrder", async (req,res)=>{
    let newOrder=new OrderModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode
    })
    await newOrder.save();
    res.send({message:"Order created successfully"});
});

app.get("/allorders",async(req,res)=>{
    let allOrders=await OrderModel.find({});
    res.json(allOrders);
});

app.post("/auth/logout",(req,res)=>{
    res.cookie("token","", { expires: new Date(0) });
    res.json({ message: "Logged out successfully" });
});

app.use("/auth",authRoute);