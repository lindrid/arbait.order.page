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
        pay_method: app.pay_method,
        worker_total: app.worker_total,
        floor: app.floor,
        elevator: app.elevator,
        taxi: app.taxi,
        client_phone_number: app.client_phone_number,
    };
}

export const useAppHistory = defineStore('app',{
    /**
     * @return {Object}
     * @property {Application[]} apps
     * @property {Application|null} moving_app
     */
    state: () => {
        return {
            apps: [],
            movingApp: null
        }
    },
    getters: {
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
         * @return {Application|null}
         */
        movingApp(state) {
            return state.movingApp;
        }
    },
    actions: {
        /**
         * @param {Application} app
         * @param {string} date
         */
        push (app) {
            this.apps.push(createNewApp(app));
        },
        /**
         *
         * @param {Application} app
         */
        saveMovingApp(app) {
            this.movingApp = createNewApp(app);
        },
        /**
         * Set movingApp to null
         */
        clearMovingApp() {
            this.movingApp = null;
        },
        /**
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
        },
        /**
         * @param {number} service_type
         * @param {number|null} category
         * @return {number}
         */
        count(service_type, category) {
            const serviceApps = this.apps.filter(app => app.service_type === service_type);
            console.log(serviceApps);
            let apps = serviceApps;
            console.log(service_type);
            console.log(category);
            if (category !== null)  {
                apps = serviceApps.filter(app => Number(app.category) === Number(category))
            }
            console.log(apps);
            return apps.length;
        },
        /**
         * @param {number} service_type
         * @param {number|null} category
         * @return {Application[]}
         */
        applications(service_type, category) {
            /**
             *
             * @type {Application[]}
             */
            const serviceApps = this.apps.filter(app => Number(app.service_type) === Number(service_type));
            let apps = serviceApps;
            console.log(apps);
            if (category !== null)  {
                apps = serviceApps.filter(app => Number(app.category) === Number(category))
            }

            return apps.sort((a, b) => {
                return (a.date.trim() > b.date.trim())? -1 :
                    (a.date.trim() === b.date.trim())?
                        (a.time.trim() > b.time.trim())? -1 : 1 : 1
            });
        }
    },
    persist: true,
})