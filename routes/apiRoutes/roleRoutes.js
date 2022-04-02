const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const { displayNeatly } = require('../../lib/Prompts');

// Get all roles
router.get('/role', (req, res) => {
    const sql = `SELECT * FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: displayNeatly(data),
            data: rows,
        });
    });
});

// Add a role
router.post('/role', ({ body }, res) => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: `Added role ${body.title} to the database.`,
            data: body,
        });
    });
});

module.exports = router;
