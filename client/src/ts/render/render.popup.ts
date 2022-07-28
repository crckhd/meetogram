import { Render } from "./render";
import { PopupTemplate } from "./render.types";
import { RenderTimer } from "./render.timer";

const RENDER_POPUP_ROOT_ID = "popup_root";
const RENDER_POPUP_ID = "popup_";
const POPUP_CLASS = "popup";
const POPUP_WITH_CLOSE = POPUP_CLASS + "_close";

export class Popup {
	private static _renderStack: PopupTemplate[] = [];
	private _popupID: number;
	private _render = new Render();
	private _currentTemplate: PopupTemplate;
	private _innerHTML = "";

	constructor(template: PopupTemplate) {
		this._currentTemplate = template;
		this._popupID = Popup._renderStack.length;
		Popup._renderStack.push(template);
	}

	/**
	 * Убирает все поповеры
	 */
	static forceHideAll(): void {
		document.querySelector(RENDER_POPUP_ROOT_ID).innerHTML = "";
	}

	/**
	 * Рендерит крестик на поповере
	 */
	private _renderClose(element: HTMLElement): void {
		element.classList.add(POPUP_WITH_CLOSE);
	}

	/**
	 * Прекомпилирует темплейт из Pug в память
	 */
	prerender(): void {
		try {
			this._innerHTML = this._render.renderFile(this._currentTemplate);

		} catch (e: unknown) {
			this._innerHTML = "";
			console.error(e);
		}
	}

	/**
	 * Рендерит шаблон на экран
	 */
	render(): void {
		const popupElement = document.createElement("div");
		popupElement.id = RENDER_POPUP_ID + this._popupID;
		popupElement.style.zIndex = `${this._popupID + 1}`;

		// Пререндерим темплейт
		if (!this._innerHTML) {
			this.prerender();
		}

		popupElement.innerHTML = this._innerHTML;

		// Если мы можем закрыть попап
		if (this._currentTemplate.isClosable) {
			this._renderClose(popupElement);
		}

		// Если на попапе есть таймер закрытия
		if (this._currentTemplate.timer) {
			new RenderTimer(this, this._currentTemplate);
		}
	}

	/**
	 * 	Удаляет текущий попап
	 */
	hide(): void {
		const currentPopup = document.getElementById(RENDER_POPUP_ID + this._popupID);
		currentPopup?.remove();
	}
}
