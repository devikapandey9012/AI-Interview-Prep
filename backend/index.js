//1) create an express server and check if it's working
import express from "express"   //we are importing express module which we installed using npm i
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database-config.js";
import userRoutes from "./routes/auth-route.js";
import sessionRoutes from "./routes/session-route.js";
import aiRoutes from "./routes/ai-routes.js";

dotenv.config();
connectDB(); // 🔥 connect MongoDB here

//2) call/invoke the function
let app= express()     //object={listen}

app.use(cors({
    origin: "http://localhost:5173",
}),
);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/auth', userRoutes);     //http://localhost:9000/api/auth/signup
app.use('/api/sessions', sessionRoutes);
app.use('/api/ai', aiRoutes);

// 4) declare routes -> app.get.http_method('endpoint', callback)
// app.get("/", (req,res)=>{             //req(data coming from frontend),res(to send from server)--> object
//     // console.log("executing");
//     // res.send("Welcome")          //send() is used to display the content on UI, not an standard
//     // res.json({
//     //     sucess: true,
//     //     message: "okay",
//     //     data: {userName: "abc"}})  
//     res.status(500).json({                  //500 internal server error, 400 for client side erroe, 200 is for success
//         success: false,
//         message: "error occurred",
//         err: {name: "some error"},
//     })
// })

// 3) assign a port number to our server
app.listen(9000, (err)=>{
    if(err) console.log(err);
    console.log("Server Started....");
    
});      //app.listen(PORT_NUMBER, CALLBACK)
// to check if the server is running, in cmd(git bash), goto backend folder and type npx nodemon index.js(ext is not mandatory)
// open browser --> localhost:PORT_NUMBER



