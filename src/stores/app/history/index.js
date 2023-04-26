import { defineStore } from 'pinia'

/**
 * @typedef {Object} Application - Заявка
 * @property {number} id - id = 0, если не был еще записан в базу
 * @property {string} address - Адрес заявки
 * @property {string} what_to_do - Что делать?
 * @property {string} date - Дата заявки
 * @property {string} time - Время в 24 часовом формате HH:MM,
 * @property {number} price - Сколько клиент платит за услугу
 * @property {number} price_for_worker - Сколько диспетер платит рабочему
 * @property {boolean} hourly_job - почасовая работа или нет
 * @property {number} pay_method - на карту, наличка
 * @property {number} worker_total - сколько нужно рабочих
 * @property {number} floor - этаж
 * @property {boolean} elevator - есть ли лифт
 * @property {boolean} taxi - заказывать такси для рабочих или нет
 * @property {string} client_phone_number - номер клиента для связи
 */

export const useAppHistory = defineStore('app',{
    /**
     * @return {Object}
     * @property {Application[]} apps
     */
    state: () => {
        return {
            apps: []
        }
    },
    getters: {
        /**
         * @return {number}
         */
        count(state) {
            return state.apps.length;
        },
        /**
         *
         * @param state
         * @return {Application}
         */
        last(state) {
            return state.apps[this.count - 1]
        },
        /**
         *
         * @param state
         * @return {Application[]}
         */
        applications(state) {
            return state.apps.sort((a, b) => {
                return (a.date.trim() > b.date.trim())? -1 :
                    (a.date.trim() === b.date.trim())?
                        (a.time.trim() < b.time.trim())? -1 : 1 :
                        1
            });
        }
    },
    actions: {
        /**
         * @param {Object} app
         * @param {string} date
         */
        push (app, date) {
            const newApp = {
                id: app.id,
                address: app.address,
                date: date,
                time: app.time,
                hourly_job: app.hourly_job,
                what_to_do: app.what_to_do,
                pay_method: app.pay_method,
                worker_total: app.worker_total,
                floor: app.floor,
                elevator: app.elevator,
                taxi: app.taxi,
                client_phone_number: app.client_phone_number,
            };

            this.apps.push(newApp);
        },
        /**
         *
         * @param {string} appId
         * @return {Application|null}
         */
        getApp(appId) {
            const apps = this.apps;
            for(let i = 0; i < apps.length; i++) {
                if (Number(apps[i].id) === Number(appId)) {
                    return apps[i];
                }
            }
            return null;
        }
    },
    persist: true,
})