const mysql=require("../connection/connect")
const display =(req,res)=>{
    const dis="SELECT * FROM cities";
    mysql.query(dis,(error,data)=>{
        if (error) {
            return res.status(500).json({msg :error})
            
        }
        else {
            return res.status(200).json({msg:data})
        }
    })
}
const insert=(req,res)=>{
    const { name, email, password } = req.body;
    const insert="insert into user(name,email,password) value(?,?,?)";
    const data=[name,email,password]
    mysql.query(insert,data,(error,userdata)=>{
        if (error) {
            return res.status(500).json({msg :error})

            
        }
        else {
            return res.status(200).json({msg:"data is suncessfully inserted"})
        }
    })
    
}
const finding=(req,res)=>{
    const {name}=req.body
    const find=`select * from user where name=?`
    const namedata=[name]
    mysql.query(find,namedata,(error,findata)=>{
        if (error) {
            return res.status(500).json({msg :error})
            
        }
        else 
        {
            return res.status(200).json({msg :findata})
            
        }
        
    })
}

const deletedata=(req,res)=>{
    const {name}=req.body
    const del="delete from user where name =?"
    const data=[name]
    mysql.query(del,data,(error,userdata)=>{
        if (error) {
            return res.status(500).json({msg :error})
            
            
        }
        else {
            
            return res.status(200).json({msg :"data is deleted sucessfully"})
        }
    })

}
module.exports={display,insert,finding,deletedata}