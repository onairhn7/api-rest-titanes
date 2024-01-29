//const express = require('express');  esta sitaxis no es modular y la siguiente sera  equivalente

import express from 'express';
import {titan} from './routes/apiTitan.js'

const app = express();

//middlewares esta linea es para que pueda reconocer archivos json
app.use(express.json());


const port = 5000;

app.use('/api/titan', titan)


app.listen(port, ()=>{


console.log(`esuchando en el puerto ${port}`);

})