import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


//For obvious reasons I am not hardcoding my password in here.
const CONNECTION_URL = "mongodb+srv://Hank:Hank456@cluster0.qqkfd0n.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

//Connects the web app to MongoDBAtlas(where the database is hosted).
mongoose.connect(CONNECTION_URL)
  .then(()=>{console.log(`Server running on port: ${PORT}`)})
  .catch((error) => console.log(error.message));

  
 