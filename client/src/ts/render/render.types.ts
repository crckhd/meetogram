// Интерфейс для шаблона для отрисовки
export interface Template {
	path: string,
}

// Интерфейс для попапа
export interface PopupTemplate extends Template {
	isClosable: boolean,
	timer?: TemplateTimer
}

interface TemplateTimer {
	milliseconds: number,
	isRequired: boolean
}

// Интерфейс для классов, которые что-то рендерят
export interface RenderClass {
	hide: () => void,
	render: () => void,
	prerender: () => void
}