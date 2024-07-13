const http = require("http");
const fs = require('fs');
const url = require('url');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from Home'));
app.get('/about',(req,res)=>res.send('Hello from about'));

app.listen(8000,()=>console.log('server started!!!!!!!'))