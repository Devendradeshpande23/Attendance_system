const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/:id', (req, res) => {
const userId = req.params.id;


db.query(
"SELECT * FROM attendance WHERE user_id=?",
[userId],
(err, data) => {
if (err) return res.status(500).json(err);
res.json(data);
}
);
});


module.exports = router;