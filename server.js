const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// Import question bank (make sure questions.js exports QUESTION_BANK)
const { QUESTION_BANK } = require('./questions');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    secret: 'your-strong-secret-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  // set to true if using HTTPS
}));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// -------------------- LOGIN ENDPOINT --------------------
app.post('/login', (req, res) => {
    const { email, studentId, section, firstName, lastName } = req.body;

    // In a real app, validate against a database.
    // For demo, we accept any non‑empty values.
    if (!email || !studentId || !section) {
        return res.status(400).json({ success: false, error: 'Missing fields' });
    }

    // Store user in session
    req.session.user = {
        id: studentId,
        email,
        section,
        firstName,
        lastName
    };

    res.json({ success: true });
});

// -------------------- QUESTIONS ENDPOINT --------------------
app.get('/api/questions', (req, res) => {
    // Check if user is logged in
    if (!req.session.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Shuffle and pick 100 questions
    const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
    const subset = shuffled.slice(0, 100);

    // (Optional) Store which subset was given to this student
    // to prevent different questions on refresh – but we keep it simple.

    res.json(subset);
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
