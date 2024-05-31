// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Property = require('./models/Property');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// CRUD routes
app.post('/properties', async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).send(property);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).send(properties);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).send();
    res.status(200).send(property);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!property) return res.status(404).send();
    res.status(200).send(property);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) return res.status(404).send();
    res.status(200).send(property);
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
