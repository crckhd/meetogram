module.exports = {

	action: {
		createRoom: (room) => {
		},

		removeRoom: (room) => {
		},

		getRoom: (uuid) => {
		}
	},
	utils: {

		/**
		 * Проверяем есть ли UUID, переданный в аргументах в базе данных
		 * @param {string} uuid - UUID, который нужно проверить
		 * @param {boolean} Есть ли такой UUID в базе данных
		 */
		isUUIDExists: () => {
			return false;
		}
	}
}
