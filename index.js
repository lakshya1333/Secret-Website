//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const __dir = dirname(fileURLToPath(import.meta.url));

let userpass = "";
let pass = "srilaxmi"
function getpassword(req,res,next){
    console.log(req.body)
    userpass = req.body["password"];
    next();
}
app.use(getpassword)

app.get("/",(req,res)=>{
    res.sendFile(__dir + "/public/index.html")
})
app.post("/check",(req,res)=>{
    if(userpass == pass){
        res.sendFile(__dir + "/public/secret.html")
    }
    else{
        res.send("Wrong password try again")
    }
})

app.listen(port);