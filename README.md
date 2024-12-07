# Ticket Filtering App

Приложение для отображения и фильтрации авиабилетов. Билеты сортируются по цене и могут быть отфильтрованы по количеству пересадок. Также предусмотрена возможность изменения валюты с пересчетом стоимости билетов в реальном времени.

---

## **Функциональность**

1. **Отображение билетов**:
   - Билеты загружаются из файла `tickets.json`.
   - Сортируются по цене (от дешевых к дорогим).
   
2. **Фильтрация билетов**:
   - Фильтрация по количеству пересадок (0, 1, 2, 3 пересадки).
   
3. **Выбор валюты**:
   - Возможность выбрать валюту для отображения цен: `RUB`, `USD`, `EUR`.
   - Используется API для получения актуальных курсов валют: `https://api.exchangerate-api.com/v4/latest/RUB`.

---

## **Структура проекта**

```plaintext
src/
├── components/
│   ├── Filter/
│   │   ├── Filter.tsx        # Компонент фильтра
│   │   ├── styles.css        # Стили для фильтра
│   ├── TicketCard/
│   │   ├── TicketCard.tsx    # Компонент карточки билета
│   │   ├── styles.css        # Стили для карточки
│   ├── TicketList/
│   │   ├── TicketList.tsx    # Компонент списка билетов
│   │   ├── styles.css        # Стили для списка билетов
├── tickets.json              # JSON с данными билетов
├── App.tsx                   # Главный компонент приложения
├── index.tsx                 # Точка входа в приложение
├── App.css                   # Глобальные стили

---

## **Установка зависимостей**
yarn install

---

## **Запуск приложения**
yarn start
Приложение будет запущено локально и доступно по адресу http://localhost:3000.

---

## **Используемые технологии**
React — основа приложения.
TypeScript — для типизации.
CSS — стилизация компонентов.
Fetch API — для получения данных о курсах валют.