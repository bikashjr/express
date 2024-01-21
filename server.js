const express = require('express');
const path = require('path');
const { sendSignupEmail } = require('./mail');

const app = express();
const PORT = 9999;

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.get('/about', (req, res) => {
    res.send('Welcome to About page!');
})

app.post('/signup', async (req, res) => {
    try {
        const result = await sendSignupEmail();
        res.redirect('/');
    } catch (error) {
        console.error('Error handling signup:', error);
        res.status(500).send('Error handling signup.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
