// Модуль для создания случайных UUID
const crypto = require('crypto');

// Модуль для работы с базой данных
const DB = require('./DB');

class Room {

	// По умолчанию пользователь с id === 1 - всегда создает комнату
	CREATOR_USER_ID = 1;

	/**
	 * Конструктор для комнат
	 */
	constructor() {
		this.roomID = this.#createUUID();
		this.creatorID = this.CREATOR_USER_ID;
		this.connectedUserList = [this.CREATOR_USER_ID];
	}

	/**
	 * Создает UUID для комнаты
	 * @private
	 * @returns {string} UUID для новой комнаты
	 */
	#createUUID() {

		// Переменная для того чтобы вычислить есть ли уже такой UUID в БД
		// По умолчанию будет, true, так как первая проверка отдаст нам сразу же false, если такого UUID не будет
		let isUUIDExists = true;

		// Переменная для нового UUID
		let uuid;

		// Пробуем создать новый UUID, которого бы ещё не было
		do {
			uuid = crypto.randomUUID();
			isUUIDExists = DB.utils.isUUIDExists(uuid);
		} while (isUUIDExists);

		return uuid;
	}
}

module.exports = Room;
