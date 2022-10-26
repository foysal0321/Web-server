const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const data = require('./data/data.json');

app.get('/',(req,res)=>{
    res.send('web is running!') 
});

app.get('/web',(req,res)=>{
    res.send(data);
});

app.get('/web/:id',(req,res)=>{
    const ids= req.params.id;
    const selectId = data.find(i => i.id === ids);
    res.send(selectId);
});



app.listen(port,()=>{
    console.log(`web server is running ${port}`);
});