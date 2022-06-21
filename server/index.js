// server/index.js
import express from "express"
import path from "path"
import { fileURLToPath } from "url";
const PORT = process.env.PORT || 3001;
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname + './public')))

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

const client = new MongoClient('mongodb+srv://Pavlo:31415926pawa@cluster0.3jvh9.mongodb.net/testing?retryWrites=true&w=majority')

const start = async () => { 
    try {
        await client.connect()
        console.log('Зєднання пройшло')
        // await client.db().createCollection('auth')
        const auth = client.db().collection('auth')
        auth.insertOne({ login: "halgmfgjmgmamai@gmail.com", password: '31415gfmgfgfg26redred' })
        const us = await auth.findOne({ login: "halgmfgjmgmamai@gmail.com" })
        console.log(us)
        
    } catch (e) { 
        console.log(e)
    }
}
start();