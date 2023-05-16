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
            if (!this.app) {
                this.app = create(app);
            } else {
                this.app = {};
                copy(this.app, app);
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