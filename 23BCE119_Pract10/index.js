const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;
const MONGO_URL = ''; // Replace with your MongoDB URI

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection URL & DB name
const url = 'MONGO_URL';
const dbName = 'testDB';
const client = new MongoClient(url);

let db, collection;

async function connectDB() {
  await client.connect();
  db = client.db(dbName);
  collection = db.collection('users');
  console.log('Connected to MongoDB');
}
connectDB();

// CREATE
app.post('/users', async (req, res) => {
  const user = req.body;
  const result = await collection.insertOne(user);
  res.send(result);
});

// READ (All users)
app.get('/users', async (req, res) => {
  const users = await collection.find().toArray();
  res.send(users);
});

// READ (Single user by ID)
app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await collection.findOne({ _id: new ObjectId(id) });
  res.send(user);
});

// UPDATE
app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedUser }
  );
  res.send(result);
});

// DELETE
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
