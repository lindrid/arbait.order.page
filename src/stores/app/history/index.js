import { defineStore } from 'pinia'
import { create } from "@/services/application";
import { numEquals } from "@/services/misc";
import { usePhoneStore } from "@/stores/app/phone";

/**
 * @param {string} phone
 */
const savePhone = function (phone) {
    const phoneStore = usePhoneStore();
    phoneStore.save(phone);
}

export const useAppHistory = defineStore('app-history',{
    /**
     * @return {Object}
     * @property {Application[]} apps
     */
    state: () => {
        return {
            apps: [],
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
    },
    actions: {
        /**
         * @param {Application} app
         */
        push (app) {
            this.apps.push(create(app));
            savePhone(app.client_phone_number);
        },
        /**
         * @param {number} appId
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
            const serviceApps = this.apps.filter(
                app => numEquals(app.service_type, service_type)
            );
            let apps = serviceApps;

            if (category !== null) {
                apps = serviceApps.filter(
                    app => numEquals(app.category, category)
                );
            }

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
            const serviceApps = this.apps.filter(
                app => numEquals(app.service_type, service_type)
            );
            let apps = serviceApps;

            if (category !== null)  {
                apps = serviceApps.filter(
                    app => numEquals(app.category, category)
                );
            }

            return apps.sort((a, b) => {
                return (a.date.trim() > b.date.trim())? -1 :
                            (a.date.trim() === b.date.trim())?
                                (a.time.trim() > b.time.trim())? -1 : 1
                            : 1
            });
        }
    },

    persist: true,
})