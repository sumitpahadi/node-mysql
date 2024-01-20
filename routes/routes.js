const routes=require("express").Router()
const {display,insert,finding,deletedata}=require("../userocntroller/controller")
routes.get("/user",display)
routes.post("/client",insert)
routes.get("/find",finding)
routes.delete("/del",deletedata)

module.exports=routes