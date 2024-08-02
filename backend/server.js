const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json());

app.use('/api/users/create', (req, res) => {
  const { product_name, price, description } = req.body;
  const sql =
    'INSERT INTO products(product_name,price,description) VALUES (?, ?, ?)';
  db.query(sql, [product_name, price, description], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  return res.status(200).json({ message: 'User created successfully' });
});

app.use('/', (req, res) => {
  res.send('Hello World!');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
