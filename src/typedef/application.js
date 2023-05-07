/**
 * @typedef {Object} Application - Заявка
 *
 * @property {number} id - id = 0, если не был еще записан в базу
 * @property {number} service_type - тип услуги (грузчки, разнорабочие, переезды, мусор)
 * @property {number} category - категория услуги (например, маляры, штукатурщики и тп)
 * @property {string} address - Адрес заявки. Начальный адрес для переезда.
 * @property {string|null} address_to - Конечный адрес для переезда.
 * @property {string} what_to_do - Что делать?
 * @property {string} date - Дата заявки
 * @property {string} time - Время в 24 часовом формате HH:MM,
 * @property {number} price - Сколько клиент платит за услугу грузчикам
 * @property {number} price_for_worker - Сколько диспетер платит рабочему
 * @property {number|null} driver_price - Сколько клиента платит за услуги водителю
 * @property {number|null} price_for_driver - Сколько дистпетчер платит водителю
 * @property {boolean} hourly_job - почасовая работа или нет
 * @property {number} pay_method - на карту, наличка
 * @property {number} worker_total - сколько нужно рабочих
 * @property {number|null} floor - этаж
 * @property {boolean|null} elevator - есть ли лифт
 * @property {boolean|null} taxi - заказывать такси для рабочих или нет
 * @property {boolean|null} give_tools - Выдает ли заказчик инструмент
 * @property {string} client_phone_number - номер клиента для связи
 */