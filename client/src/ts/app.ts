import Loader from "./loader/loader";

class App {
	private _loader = Loader;
	constructor() {
		this._loader.init();
	}
}

// Инициализируем приложение
new App;