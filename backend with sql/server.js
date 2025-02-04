const express=("express");
const mysql=require("mysql");
const conn=mysql.createConnection({
host:"",
  name:"",
  password:"",
  database:"",})

const app=express();
app.use(express.json());
conn.connect((err)=>
  {
    if(!err)
    {
      console.log("connected");
    }
    console/log("not connected")
  })
    

app.get("/",(req,res)=>
  {
    conn.query("SELECT * from users",(error,result)=>
      {
        if(err)console.log(error);
        res.send(result);
      })})
