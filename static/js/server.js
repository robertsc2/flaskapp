const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Connect to SQLite database
const db = new sqlite3.Database('./menu.db');

// API endpoint to fetch price
app.get('/api/price/:item', (req, res) => {
  const item = req.params.item;
  db.get('SELECT price FROM menu WHERE item = ?', [item], (err, row) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else if (row) {
      res.json({ item, price: row.price });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  });
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));