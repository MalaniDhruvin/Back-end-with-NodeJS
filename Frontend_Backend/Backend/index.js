import Express from 'express';
const app = Express();

app.get('/item', (req, res) => {

    const arr = [{ id: 1, title: "hola", content: "chan hola cvhan" }, { id: 2, title: "hola", content: "chan hola cvhan" }, { id: 3, title: "hola", content: "chan hola cvhan" }];
    res.send(arr);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
