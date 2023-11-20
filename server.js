const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Подключаем cors


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const users = [
    { username: 'codify', password: 'codify' },
];


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: 'Успешно вошли' });
    } else {
        res.status(401).json({ message: 'Неверный логин и пароль' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});