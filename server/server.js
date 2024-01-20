const express = require('express');
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
})

const getData = async (req, res) => {
    const result = await client.connect();
    const db = result.db('express');
    const collection = db.collection('express');
    let response = await collection.find().toArray();
    console.log(response);
}
getData();

app.listen(9999)