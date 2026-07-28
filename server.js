const express = require('express');
const session = require('express-session');
const app = express();

// In production, store questions in a database or a secure JSON file
const QUESTION_BANK = require('./questions.js').QUESTION_BANK;

app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: true }));

// Login endpoint
app.post('/login', (req, res) => {
    // Validate credentials (e.g., against database)
    req.session.user = { id: req.body.studentId, email: req.body.email };
    res.json({ success: true });
});

// Questions endpoint – protected
app.get('/api/questions', (req, res) => {
    if (!req.session.user) return res.status(401).json({ error: 'Unauthorized' });
    // Optionally, check if student already submitted
    // Send a random subset of 100 questions
    const shuffled = QUESTION_BANK.sort(() => 0.5 - Math.random());
    const subset = shuffled.slice(0, 100);
    res.json(subset);
});

app.listen(3000);
