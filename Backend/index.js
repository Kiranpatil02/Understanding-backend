import express from 'express';

const app=express();

// app.get("/",(req,res)=>{
//     res.send("Hey there")
// })

const port=process.env.PORT || 3000


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})

app.get('/api/quotes',(req,res)=>{
    res.send([
        {
            id:1,
            content:"Ignorance is bliss."
        },
        {
            id:2,
            content:"Either you swim or sink. No inbetween"
        },
        {
            id:3,
            content:"Time is running out"
        }
    ])
})