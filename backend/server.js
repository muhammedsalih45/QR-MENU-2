const express = require('express');
const cors = require('cors');
const Products = require('./models/Products'); // Doğru şekilde import edildiğinden emin olun
const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json());



app.post('/api/products/create', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const lastProduct = await Products.findOne({
      order: [['id', 'DESC']]
    });

    const newId = lastProduct ? lastProduct.id + 1 : 1;

    const product = await Products.create({
      id: newId,
      name: name,
      price: price,
      description: description
    });

    res.json({ success: true, product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).send('Internal server error');
  }
});

app.get('/api/products', async (req, res) => { 

  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal server error');  
  }   
});

(async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
