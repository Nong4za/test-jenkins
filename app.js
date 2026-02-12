const express = require('express');
const app = express();
app.use(express.json());

app.get('/jokes/random', (req, res) => {
    res.json({ joke: 'Why did the developer go broke? Because he used up all his cache.' });
});

app.get('/jokes/category/:type', (req, res) => {
    res.json({ category: req.params.type, joke: 'Category joke here' });
});

app.post('/jokes/rate', (req, res) => {
    res.json({ message: 'Rating saved' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
