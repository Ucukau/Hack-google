app.post('/submit', (req, res) => {
    const { message } = req.body;
    console.log('Pesan yang dikirim: ' + message);
    res.send('Pesan berhasil dikirim: ' + message);
});

