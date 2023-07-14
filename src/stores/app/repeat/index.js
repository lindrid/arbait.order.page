import { defineStore } from 'pinia'

export const useRepeatStore = defineStore('repeat',{
    /**
     * @return {Object}
     * @property {Application|null} app
     */
    state: () => {
        return {
            /**
             * @type {number | null}
             */
            appId: null
        }
    },
    getters: {
        repeated(state) {
            return state.appId !== null;
        }
    },
    actions: {
        /**
         *
         * @param {number} appId
         */
        save(appId) {
            this.appId = appId;
        },
        /**
         *
         * @param {number} appId
         * @return {boolean}
         */
        equal(appId) {
            return this.appId === appId;
        },
        /**
         * Set appId to null
         */
        clear() {
            this.appId = null;
        },
    },
    persist: true,
})