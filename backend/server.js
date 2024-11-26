const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',  // Update with your MySQL password
  database: 'contact'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/api/submit', (req, res) => {
  const { name, email, countryCode, mobile, message } = req.body;
  const sql = 'INSERT INTO submissions (name, email, countryCode, mobile, message) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [name, email, countryCode, mobile, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to submit data' });
    }
    res.status(200).json({ message: 'Form submitted successfully' });
  });
});

// Function to insert data from terminal
const insertDataFromTerminal = (name, email, countryCode, mobile, message) => {
  const sql = 'INSERT INTO submissions (name, email, countryCode, mobile, message) VALUES (?, ?, ?, ?, ?)';
  
  db.query(sql, [name, email, countryCode, mobile, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully');
  });
};



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});