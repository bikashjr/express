const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.sendFile(path.join(publicPath, 'home.html'));
});

const PORT = 9999;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
