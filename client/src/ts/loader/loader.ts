import { Template } from "../render/render.types";
import { renderWindow } from "../render/render.window";

const LOADER_WINDOW_PATH = "views/loader";
const LOADER_TEMPLATE: Template = {
	path: LOADER_WINDOW_PATH,
};

let loaderWindow: renderWindow;

const Loader = {
	init(): void {
		loaderWindow = new renderWindow(LOADER_TEMPLATE);
		loaderWindow.render();
	},
};

export default Loader;