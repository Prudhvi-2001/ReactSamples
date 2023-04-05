const express=require('express')
const app=express();
console.log(express)
app.use(express.json());
app.post('/register',(req,res)=>{
    console.log(req.body)
})
app.get('/',(req,res)=>{
    res.send('<p>Home Page</p>')

})
app.listen(5000,()=>{
    console.log('Server is Established')
})