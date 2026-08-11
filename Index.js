const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

// Jembatan khusus untuk mengambil harga dari Indodax
app.get('/api/ticker/:pair', async (req, res) => {
    try {
        const pair = req.params.pair;
        const response = await fetch(`https://indodax.com/api/ticker/${pair}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data dari Indodax" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server NetTrace berjalan di port ${PORT}`));
