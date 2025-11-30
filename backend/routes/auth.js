const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {
const { name, email, password } = req.body;
const hash = await bcrypt.hash(password, 10);


db.query(
"INSERT INTO users (name, email, password) VALUES (?,?,?)",
[name, email, hash],
(err) => {
if (err) return res.status(400).json({ message: "Email already exists" });
res.json({ message: "User registered successfully" });
}
);
});


router.post('/login', (req, res) => {
const { email, password } = req.body;


db.query("SELECT * FROM users WHERE email=?", [email], async (err, data) => {
if (err || data.length === 0) return res.status(400).json({ message: "User not found" });


const valid = await bcrypt.compare(password, data[0].password);
if (!valid) return res.status(400).json({ message: "Invalid password" });


const token = jwt.sign({ id: data[0].id }, "SECRET_KEY", { expiresIn: "1d" });
res.json({ token, name: data[0].name });
});
});


module.exports = router;