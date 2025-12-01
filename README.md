# Portfolio Filters

Это проект на **React + Vite**, демонстрирующий портфолио с фильтрами по категориям.  
Пользователь может переключать отображение проектов по фильтрам и видеть карточки проектов.

## Технологии

- React 18
- Vite
- CSS (стили в `App.css`)
- ESLint (базовая конфигурация)

## Структура проекта

- `src/components/` — компоненты приложения (`Portfolio.jsx`, `ProjectList.jsx`, `Toolbar.jsx`)  
- `src/data.jsx` — данные проектов  
- `src/img/` — изображения проектов  
- `src/App.jsx` — корневой компонент приложения  
- `src/App.css` — стили проекта  
- `src/main.jsx` — точка входа приложения

## Установка и запуск

1. Клонировать репозиторий:

```bash
git clone https://github.com/b1gfarmer/portfolio-filters.git
cd portfolio-filters
````

2. Установить зависимости:

```bash
yarn install
# или
npm install
```

3. Запустить приложение в режиме разработки:

```bash
yarn dev
# или
npm run dev
```

Открой [http://localhost](http://localhost) в браузере.

## Возможности проекта

* Фильтрация проектов по категориям
* Адаптивная сетка карточек проектов
* Минимальная стилизация через CSS
* Поддержка React Fast Refresh через Vite

## Примечания

* Проект создан для выполнения тестового задания, поэтому шрифты и стили минимальные
* Для иконок можно использовать [Material Icons](https://fonts.google.com/icons)

