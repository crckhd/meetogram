import { Render } from "./render";
import { Template } from "./render.types";

const RENDER_WINDOW_ROOT_ID = "window_root";

export class renderWindow {
	private _currentTemplate: Template;
	private _innerHTML = "";
	private _render: Render;

	constructor(template: Template) {
		this._render = new Render;
	}

	prerender(): void {
		try {
			this._innerHTML = this._render.renderFile(this._currentTemplate);

		} catch (e: unknown) {
			this._innerHTML = "";
			console.error(e);
		}
	}

	render(): void {
		const windowElement = document.getElementById(RENDER_WINDOW_ROOT_ID);

		// Пререндерим темплейт
		if (!this._innerHTML) {
			this.prerender();
		}

		windowElement.innerHTML = this._innerHTML;
	}
}