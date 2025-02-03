const express=require("express");
const path=require("path");
const PORT=4000
const app=express();
const publicPath=path.join(__dirname,"public");

app.use(express.static(publicPath))
app.listen(PORT,()=>
{
              console.log("server is running");
})
