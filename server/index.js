const express = require('express');
const app = express();

const Room = require('./modules/Room');

app.use(express.static('/client'));
app.listen('4000');

app.get('/', (req, res, next) => {

	// Создаем новую комнату для пользователя
	const userRoom = new Room();

	// Перенаправляем по UUID
	res.redirect('/' + userRoom.roomID);
});

app.get('/:uuid', (req, res, next) => {
	console.log(res, req);
});
