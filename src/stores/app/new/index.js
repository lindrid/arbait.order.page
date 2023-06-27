import { defineStore } from 'pinia'
import { copy, create } from "@/services/application";

export const useNewAppStore = defineStore('app-new',{
    /**
     * @return {Object}
     * @property {Application|null} app
     */
    state: () => {
        return {
            /**
             * @type {Application | null}
             */
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
         * @param {Application} app
         */
        save(app) {
            if (app.id === 0) {
                if (!this.app) {
                    this.app = create(app);
                } else {
                    copy(this.app, app);
                    console.log('app:');
                    console.log(app);
                }
            }
        },
        /**
         * Set app to null
         */
        clear() {
            this.app = null;
        },
    },
    persist: true,
})