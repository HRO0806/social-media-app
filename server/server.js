import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/index.js';

const app = express();

app.use('/', userRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


//For obvious reasons I am not hardcoding my password in here.
const CONNECTION_URL = "mongodb+srv://Hank:Hankman@cluster0.qqkfd0n.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

//Connects the web app to MongoDBAtlas(where the database is hosted).
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  //.then(()=>{console.log(`Server running on port: ${PORT}`)})
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});  
 

  
 