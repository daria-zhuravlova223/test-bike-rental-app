import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import bikeRoutes from './routes/bikes.js';

const app = express();

app.use(bodyParser.json( {extended: true}));
app.use(bodyParser.urlencoded( {extended: true}));
app.use(cors());
app.use('/bikes', bikeRoutes);

const CONNECTION_URL = "mongodb+srv://bikeapp:bikeapp123@cluster0.fspcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ( ()=> console.log(`Server running on port: ${PORT}`))))
    .catch((error) => console.log(error.message));
