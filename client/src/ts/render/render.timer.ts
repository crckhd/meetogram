import { PopupTemplate, RenderClass } from "./render.types";

export class RenderTimer {

	private _timerID: number;

	constructor(private _render: RenderClass, {timer}: PopupTemplate) {
		this._timerID = setTimeout(this._render.hide, timer.milliseconds);
	}

	cancel(): void {
		clearTimeout(this._timerID);
	}
}