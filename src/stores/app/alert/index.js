import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert',{
    /**
     * @return {Object}
     * @property {boolean|null} alerted
     */
    state: () => {
        return {
            /**
             * @type {boolean | null}
             */
            alerted: null
        }
    },

    persist: true,
})