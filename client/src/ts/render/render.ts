import pug from "pug";
import { Template } from "./render.types";

const DEFAULT_PATH = "src/pug/";
const PUG_ENDING = ".pug";

export class Render {
	// Экземпляр pug
	private _pug: typeof pug;

	constructor() {
		this._pug = pug;
	}

	renderFile({ path }: Template): string {
		return this._pug.renderFile(DEFAULT_PATH + path + PUG_ENDING);
	}
}
