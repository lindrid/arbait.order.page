import { defineStore } from 'pinia'
import {copy, create} from "@/services/application";
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
        push(app) {
            this.apps.push(create(app));
            savePhone(app.client_phone_number);
        },
        /**
         * @param {Application} app
         */
        save(app) {
            const foundApp = this.getApp(app.id);
            if (foundApp) {
                copy(foundApp, app);
            } else {
                this.push(app);
            }
        },
        /**
         * @param {Number} updateAppWithId
         * @param {Application} app
         */
        update(updateAppWithId, app) {
            const apps = this.apps;
            for(let i = 0; i < apps.length; i++) {
                if (Number(apps[i].id) === Number(updateAppWithId)) {
                    copy(apps[i], app);
                    break;
                }
            }
        },
        /**
         * @param {Number} appId
         */
        delete(appId) {
            const filter = this.apps.filter(app => app.id !== appId);
            this.apps = filter;
            console.log('filter delete:');
            console.log(filter);
        },
        /**
         * @param {Number} appId
         * @return {Boolean}
         */
        appExists(appId) {
            let found = false;
            const filter = this.apps.filter(app => Number(app.id) === appId);
            console.log('filter:');
            console.log(filter);
            if (filter.length > 0) {
                found = true;
            }
            return found;
        },
        /**
         * @param {number} appId
         * @return {Application|null}
         */
        getApp(appId) {
            const apps = this.apps;
            for(let i = 0; i < apps.length; i++) {
                if (Number(apps[i].id) === appId) {
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

            apps = apps.filter(app => app.id !== 0);

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