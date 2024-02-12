const express = require('express');
const path = require('path');
const app = express();

// Serwowanie plików statycznych z folderu build
app.use(express.static(path.join(__dirname, 'build')));

// Obsługa zapytań do ścieżek (w tym do zagnieżdżonych)
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Nasłuchiwanie na określonym porcie
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
