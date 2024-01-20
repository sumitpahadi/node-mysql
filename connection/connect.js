const mysql=require("mysql")
const db=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Sumit@123",
        database:"collage"
    }
)
module.exports=db