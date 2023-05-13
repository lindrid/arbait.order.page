import { defineStore } from 'pinia'

/**
 * @param {Application} app
 */
const createNewApp = function (app) {
    return {
        id: app.id,
        service_type: app.service_type,
        category: app.category,
        address: app.address,
        address_to: app.address_to,
        date: app.date,
        time: app.time,
        hourly_job: app.hourly_job,
        what_to_do: app.what_to_do,
        price: app.price,
        price_for_worker: app.price_for_worker,
        driver_price: app.driver_price,
        price_for_driver: app.price_for_driver,
        pay_method: app.pay_method,
        worker_total: app.worker_total,
        floor: app.floor,
        floor_to: app.floor_to,
        elevator: app.elevator,
        elevator_to: app.elevator_to,
        taxi: app.taxi,
        give_tools: app.give_tools,
        client_phone_number: app.client_phone_number,
    };
}

/**
 * Copy values from appB to appA
 * @param {Application} appA
 * @param {Application} appB
 */
const copyApp = function (appA, appB) {
    for (const [key, value] of Object.entries(appB)) {
        appA[key] = value;
    }
}

export const useNewAppStore = defineStore('app-new',{
    /**
     * @return {Object}
     * @property {Application|null} app
     */
    state: () => {
        return {
            app: null
        }
    },
    getters: {
        appExists(state) {
            return !!state.app;
        }
    },
    actions: {
        /**
         *
         * @param {Application} newApp
         */
        saveApp(newApp) {
            if (!this.app) {
                this.app = createNewApp(newApp);
            } else {
                copyApp(this.app, newApp);
            }
        },
        /**
         * Set app to null
         */
        clearApp() {
            this.app = null;
        },
    },
    persist: true,
})