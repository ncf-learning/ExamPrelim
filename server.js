const express = require('express');
const session = require('express-session');
const app = express();

// Your question bank
const QUESTION_BANK = require('./questions.js').QUESTION_BANK;

// ---------- ADD THIS LINE ----------
app.use(express.static(__dirname));   // serves HTML, CSS, JS from the same folder
// ----------------------------------

app.use(express.json());
app.use(session({
    secret: 'your-strong-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// Login endpoint
app.post('/login', (req, res) => {
    // In a real app, validate credentials here
    req.session.user = {
        id: req.body.studentId,
        email: req.body.email,
        section: req.body.section
    };
    res.json({ success: true });
});

// Protected questions endpoint
app.get('/api/questions', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Shuffle and pick 100 questions
    const shuffled = QUESTION_BANK.sort(() => 0.5 - Math.random());
    const subset = shuffled.slice(0, 100);
    res.json(subset);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
