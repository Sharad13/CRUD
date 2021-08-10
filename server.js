const express=require(`express`);

const app=express();
app.use(express.json())
const fs=require("fs")

app.use(express.json())
var k;
const add=require("./add.json")

app.listen(2222,function(req,res){
    console.log("listening to port 2222:")
})
app.get("/users",function(req,res){
    return res.send("Wlecome To HomePage")
})


app.post("/users",function(req,res){
     return res.send(add)
})

app.patch('/users/:id', function (req, res) {
    var i= req.params.id;
    var body=req.body;
     var name=body.name;
   add.forEach(el => {
       if(el.id==i){
           el.name=name
       }
   });
  return res.send(add)
  
})
 

app.delete("/users/:id",function(req,res){
    let i= req.params.id;
    let body=req.body;
     let name=body.name;
   add.forEach(el => {
       if(el.id==i){
           add.splice(0,1)
       }
   });
   res.send(add)
});


