<div align="center">
	<img src="https://user-images.githubusercontent.com/101672047/180659190-d5ed9b54-fc8f-4d9c-981b-f154e2eff950.svg">
	<div style="display: flex;">
		<img src="https://github.com/crckhd/Meetogram/actions/workflows/codeql.yml/badge.svg?branch=main">
		<img src="https://github.com/crckhd/Meetogram/workflows/Lint%20Code%20Base/badge.svg?branch=main">
		<img src="https://github.com/crckhd/Meetogram/actions/workflows/build-check.yml/badge.svg?branch=main">
	</div>
</div>

<br>

**Meetogram** — это приложение для общения. Основной кейс использования - когда нужно быстро созвониться:
* Будь то ваши друзья, которые не зарегистрированы в Discord;
* Срочный созвон с родителями, которые не понимают как зарегистрироваться в Skype;
* Созвон с деловым партнером, которого стыдно будет просить "зарегистрируйтесь в Zoom, тогда и поговорим";

Meetogram предоставляет простую платформу для общения без регистраций, основной упор делается на скорость работы приложения и его безопасность.

Мы не собираем информации о наших пользователях. Вы даже не увидите плашки для Cookie, мы их просто не используем, нам не нужна аналитика.

Мы привыкли видеть что для использования многих сервисов нужно регистрироваться, заполнять вечные формы, запоминать пароли, нажимать "Принять все Cookie" (черт бы эти Cookie побрал), однако meetogram выходит за рамки данных сервисов. Тут ни регистрации, ни форм, ни плашек. Зашел и используешь.

# Преимущества
* 🙅 Приложение не требует регистрации
* 🔗 Приложение работает благодаря пригласительным ссылкам
* 🎩 Приложение распространяется под лицензией MIT
* 🔒 Можно создавать приватные комнаты с паролем
* 🗺 Открытый API

<div align="center"><h4>Приложение будет выпущено 01.03.2023 🚀</h4></div>

# Философия
Люди которые вкладывают свои силы в данное приложение преследуют философию "трех Б":
* Быстро
* Безопасно
* Бесплатно

Именно такая идеология позволяет добиться результата - Meetogram это самое быстро приложение для созвонов между группами людей.

Приложение обладает большой скоростью за счет использования низконагруженного интерфейса. В приложении всего 2 компонента: экран загрузки и экран созвона! Такая экономия UI позволяет нам загружать приложение почти мгновенно и использовать приложение становится гораздо легче. Приложение не преследует цели заменить Zoom или Skype. Оно просто связывает людей без надобности создавать аккаунты.

Приложение предоставляет открытый исходный код, для того чтобы каждая компания или человек, который использует приложение смог убедиться что все безопасно. При желании можно сделать форк приложения и развернуть данное приложение в своей сети.

# Для разработчиков
Данная секция нужна только разработчикам. Здесь описан процесс разработки, используемый стек, а также как внести свой вклад в проект.

## Процесс разработки

![План разработки drawio](https://user-images.githubusercontent.com/101672047/180662331-910b2957-4426-41de-81ce-fe03a1a33eb3.png)

## Стек технологий
Стек технологий достаточно минималистичен, в приложении не используются большие фреймвоки или сложные технологии (_кроме WebRTC, конечно же_), поэтому любой разработчик от джуна до сеньора может внести свой вклад и понять код приложения:

<div style="display: flex;">
	<img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
	<img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
	<img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
	<img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
	<img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
	<img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
	<img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
	<img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
        <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
	<img width="48" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"/>
	<img width="48" src="https://cdn.worldvectorlogo.com/logos/pug.svg"/>
	<img width="48" src="https://user-images.githubusercontent.com/101672047/180660392-db3e6021-c3a1-4cbb-b815-9c4334984f25.svg"/>
	<img width="48" src="https://user-images.githubusercontent.com/101672047/180660449-87afee01-0824-4603-b84b-d656cd441336.svg"/>
</div>

<br>

Если у вас не хватает знаний чтобы понять тот или иной код, то можно заглянуть в Wiki данного репозитория для того чтобы посмотреть какая архитектура была для той или иной фичи

<!-- Секция с директориями -->
<br>
<div align="center">
	<img src="https://user-images.githubusercontent.com/101672047/180660784-8313a0b7-a7f9-4e92-97f3-4d094c3a1a30.svg">
</div>
<br>


* **public** - Файлы, которые уже готовы и их не нужно компилировать (html, картинки, видео и так далее)
* **src** - Исходный код
	* **src/typescript** - Файлы с TypeScript
	* **src/sass** - Файлы со стилями Sass
	* **src/pug** - Файлы с шаблонами pug
* **dist** - Код готовый к продакшену
* **scripts** - Скрипты проекта на Python/bash

<!-- Секция со скриптами -->
<br>
<div align="center">
	<img src="https://user-images.githubusercontent.com/101672047/180660937-5beaede6-fed4-4cf6-b09b-f490eca2f7fa.svg">
</div>

### Установка проекта
1. Для того чтобы установить проект для начала нужен [NPM](https://nodejs.org/en/), нам подойдет LTS-версия.
2. Далее после установки нужно перезагрузить компьютер и перейти в терминал [Git Bash](https://git-scm.com/downloads)
3. После того как мы зашли с помощью терминала в наш проект (можно в проводнике открыть директорию с проектом и выбрать "Open Git Bash Terminal Here") - мы должны установить `yarn`.
	Устанавливается yarn с помощью вот этой команды:
	```bash
	npm i -g yarn
	```
4. После установки yarn нужно скачать все зависимости проекта. Для этого достаточно просто ввести: `yarn`

### Компиляция
После того как мы установили проект - достаточно просто ввести `yarn build`, для того чтобы собрать проект (**внимание, нужен [Python](https://www.python.org/downloads/)**)

Для того чтобы включить сервер, чтобы при изменениях весь проект перекомпилировался и сам перезагружал страницу - достаточно просто ввести:

```bash
# Запускаем сервер, который поможет нам разрабатывать приложение
yarn serve

# Если же мы хотим компилировать и обновлять определенный файл каждый раз при изменении, то достаточно просто ввести название файла .html из директории public/
yarn serve loader
```

## Внесите свой вклад
Любой желающий всегда может внести свой вклад в развитие приложения😌 Для того, чтобы создать свой Pull Request, просто напишите в Issues улучшение, которое хотите сделать, или выберите уже существующее.

## Ссылки на ресурсы, которые используются при разработке

Если вы хотите наблюдать за разработкой или внести в неё свои коррективы, то внизу есть сервисы, которые мы используем для того чтобы успешно планировать разработку приложения, а также для коммуникации между друг-другом:

<!-- Ссылки на наши ресурсы для разработки -->
<div align="center" style="display: flex;">
	<a href="https://trello.com/mtgram"><img width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" /></a>
	<a href="https://www.figma.com/file/kv4IBlFa1jPXX9BAJMnLY4/meetogram?node-id=0%3A1"><img width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" /></a>
</div>
