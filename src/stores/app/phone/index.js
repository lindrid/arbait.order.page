import { defineStore } from 'pinia'

export const usePhoneStore = defineStore('phone',{
    /**
     * @return {Object}
     * @property {Application|null} app
     */
    state: () => {
        return {
            /**
             * @type {string | null}
             */
            phone: null
        }
    },
    getters: {
        phoneExists(state) {
            return !!state.phone;
        }
    },
    actions: {
        /**
         *
         * @param {string} phone
         */
        save(phone) {
            this.phone = phone;
        },
        /**
         * Set phone to null
         */
        clear() {
            this.phone = null;
        },
    },
    persist: true,
})