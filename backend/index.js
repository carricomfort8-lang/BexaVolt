const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Content = require('./models/Content');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bexavolt')
  .then(() => {
    console.log('Connected to MongoDB');
    seedInitialData();
  })
  .catch(err => console.error('Could not connect to MongoDB', err));

// Initial Data Seeding
async function seedInitialData() {
  const count = await Content.countDocuments();
  if (count === 0) {
    const initialContent = [
      {
        key: 'hero',
        value: {
          title: "THE FUTURE OF EV CHARGING STARTS AT HOME.",
          subtitle: "SMART CHARGING, LIMITLESS POSSIBILITIES.",
          description: "BexaVolt delivers intelligent, safe and powerful EV charging solutions for modern homes.",
          primaryCTA: "GET A FREE QUOTE",
          secondaryCTA: "EXPLORE CHARGER"
        }
      },
      {
        key: 'features',
        value: [
          { title: "SAVE MORE", description: "Up to 60% lower charging costs*" },
          { title: "CLEAN ENERGY", description: "Power your drive with cleaner energy." },
          { title: "SAFE & RELIABLE", description: "Built with advanced safety protection." },
          { title: "ADD VALUE", description: "Increase the value of your home." }
        ]
      }
    ];
    await Content.insertMany(initialContent);
    console.log('Initial data seeded');
  }
}

// Routes
app.get('/api/content', async (req, res) => {
  try {
    const contents = await Content.find();
    const result = {};
    contents.forEach(c => result[c.key] = c.value);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

app.post('/api/content', async (req, res) => {
  try {
    const { key, value } = req.body;
    await Content.findOneAndUpdate({ key }, { value }, { upsert: true });
    res.json({ message: 'Content updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
