const express=require("express")
const routes=require("./routes/routes")
const app=express()
const mysql=require("./connection/connect")
app.use(express.json())
app.use("/",routes)
const port=4000
app.listen(port,()=>{
    console.log("server is runnning on server",port)
    mysql.connect((error)=>{
        if (error) {
            throw error
            
        }
        else{
            console.log("database is connected")
        }
    })

})