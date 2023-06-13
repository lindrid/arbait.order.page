<template>
    <section class="section">
        <Header/>
        <Back
            :icon="false"
            class-def=" text-black bg-green-700 hover:bg-green-800
                      focus:outline-none focus:ring-4
                      focus:ring-green-300 font-medium rounded-lg
                      text-xl px-3 py-2.5 text-center
                      dark:bg-green-600 dark:hover:bg-green-700
                      dark:focus:ring-green-800"
        />
        <form class="mt-6" @submit.prevent="saveForm()">
            <div class="2xl:mt-6 xl:mt-4 mt-2">
                <b class="text-xl">Начало маршрута</b>
                <input
                    type="text"
                    id="address"
                    ref="addr"
                    v-model="application.address"
                    class=" bg-gray-50 border
                    border-gray-300
                    text-gray-900
                    text-xl rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block w-full p-2.5
                    dark:bg-gray-300
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-black
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                    required
                >
            </div>

            <div v-for="(item, i) in application.waypoints">
                <div class="2xl:mt-6 xl:mt-4 mt-2">
                    <b class="text-xl">Промежуточная точка {{ i+1 }}</b>
                    <input
                        type="text"
                        id="address_to"
                        ref="addr_to"
                        v-model="application.waypoints[i]"
                        class=" bg-gray-50 border
                            border-gray-300
                            text-gray-900
                            text-xl rounded-lg
                            focus:ring-blue-500
                            focus:border-blue-500
                            block w-full p-2.5
                            dark:bg-gray-300
                            dark:border-gray-600
                            dark:placeholder-gray-400
                            dark:text-black
                            dark:focus:ring-blue-500
                            dark:focus:border-blue-500"
                        required
                    >
                </div>
            </div>

            <button
                @click="addWaypoint()"
                class="focus:outline-none text-black mt-2 bg-yellow-400
                        hover:bg-yellow-500 focus:ring-4
                        focus:ring-yellow-300 font-medium
                        rounded-lg text-xl px-3 py-2.5
                        mr-2 mb-2 dark:focus:ring-yellow-900"
            >
                Добавить точку
            </button>

            <div class="2xl:mt-6 xl:mt-4 mt-2">
                <b class="text-xl">Конец маршрута</b>
                <input
                    type="text"
                    id="address_to"
                    ref="addr_to"
                    v-model="application.address_to"
                    class=" bg-gray-50 border
                    border-gray-300
                    text-gray-900
                    text-xl rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block w-full p-2.5
                    dark:bg-gray-300
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-black
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                    required
                >
            </div>

            <div class="2xl:mt-6 xl:mt-4 mt-2">
                <b class="text-xl">Дата</b>
                <input
                    type="date"
                    id="date"
                    v-model="application.date"
                    class=" bg-gray-50 border
                    border-gray-300
                    text-gray-900
                    rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block w-full p-2.5
                    dark:bg-gray-300
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-black
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                    text-xl"
                    required
                >
            </div>
            <span class="help-block" v-if="dateError">{{ dateError }}</span>

            <div class="2xl:mt-6 xl:mt-4 mt-2">
                <b class="text-xl block">Время</b>
                <input id="time_hours"
                       type="text"
                       ref="th"
                       v-model="time_hours"
                       @focus="$event.target.select()"
                       class="
                  bg-gray-50 border
                  border-gray-300
                  text-gray-900
                  text-xl rounded-lg
                  focus:ring-blue-500
                  focus:border-blue-500
                  w-1/6 p-2.5
                  dark:bg-gray-300
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-black
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500"
                       required
                >

                <b> : </b>

                <input id="time_minutes"
                       ref="tm"
                       type="text"
                       v-model="time_minutes"
                       @focus="$event.target.select()"
                       class="
                  bg-gray-50 border
                  border-gray-300
                  text-gray-900
                  text-xl rounded-lg
                  focus:ring-blue-500
                  focus:border-blue-500
                  w-1/6 p-2.5
                  dark:bg-gray-300
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-black
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500"
                       required
                >

                <span class="help-block" v-if="timeHoursError">{{ timeHoursError }}</span>
                <span class="help-block" v-if="timeMinutesError">{{ timeMinutesError }}</span>
            </div>

            <div
                v-if="workers === 'no'"
                class="2xl:mt-6 xl:mt-4 mt-2"
            >
                <b class="text-xl block">Опишите задачу</b>
                <textarea
                    id="text"
                    v-model="application.what_to_do"
                    rows="4"
                    class=" block p-2.5 w-full text-xl
                        text-black-900 bg-gray-50
                        rounded-lg border border-gray-300
                        focus:ring-blue-500 focus:border-blue-500
                        dark:bg-gray-300 dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-black dark:focus:ring-blue-500
                        dark:focus:border-blue-500"
                    required
                >
            </textarea>
            </div>

            <div class="2xl:mt-6 xl:mt-4 mt-2">
            <span class="text-xl">
                <b class="text-red-700">Цена за {{ MovingCategories[category].formLabel }} - </b>
                <span v-if="applicationHourlyJob">
                    {{ applicationDriverPrice }}
                    {{ Number.isInteger(applicationDriverPrice) ? 'р/час' : '' }}
                </span>
            </span>
            </div>

            <div
                v-if="workers !== 'yes'"
                class="2xl:mt-8 xl:mt-6 mt-4"
            >
                <b class="text-xl block">Способ оплаты</b>
                <fieldset class="ml-4">
                    <div class="flex items-center ">
                        <input
                            id="pay_method_card"
                            type="radio"
                            name="pay_method"
                            v-bind:value="PayMethod.CARD"
                            v-model="application.pay_method"
                            class=" w-4 h-4 border-gray-300
                                focus:ring-2 focus:ring-blue-300
                                dark:focus:ring-blue-600
                                dark:focus:bg-blue-600
                                dark:bg-gray-300
                                dark:border-gray-600"
                            checked
                        >
                        <label
                            for="pay_method_card"
                            class="block ml-2 text-xl
                            font-medium text-black
                            dark:text-black"
                        >
                            На карту
                        </label>
                    </div>

                    <div class="flex items-center">
                        <input
                            id="pay_method_cash"
                            type="radio"
                            name="pay_method"
                            v-bind:value="PayMethod.CASH"
                            v-model="application.pay_method"
                            class=" w-4 h-4 border-gray-300
                                focus:ring-2 focus:ring-blue-300
                                dark:focus:ring-blue-600
                                dark:focus:bg-blue-600
                                dark:bg-gray-300
                                dark:border-gray-600"
                        >
                        <label for="pay_method_cash"
                               class=" block ml-2 text-xl
                              font-medium text-black
                              dark:text-black"
                        >
                            Наличкой
                        </label>
                    </div>
                </fieldset>
            </div>

            <div
                v-if="workers !== 'yes'"
                class="2xl:mt-6 xl:mt-4 mt-2"
            >
                <label for="client_phone_number" class="text-xl block"><b>Ваш телефон для связи</b></label>
                <input
                    id = "client_phone_number"
                    type="tel"
                    v-model="application.client_phone_number"
                    class="
              bg-gray-50 border
              border-gray-300
              text-gray-900
              text-xl rounded-lg
              focus:ring-blue-500
              focus:border-blue-500
              w-3/4 p-2.5
              dark:bg-gray-300
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-black
              dark:focus:ring-blue-500
              dark:focus:border-blue-500"
                    required
                >

                <span class="help-block" id="client_phone_number_help_block"
                      v-if="error && errors.client_phone_number">{{ errors.client_phone_number }}
            </span>
            </div>

            <div class="2xl:mt-8 xl:mt-6 mt-4">
                <button
                    type="submit"
                    class="focus:outline-none text-black bg-yellow-400
                        hover:bg-yellow-500 focus:ring-4
                        focus:ring-yellow-300 font-medium
                        rounded-lg text-xl px-3 py-2.5
                        mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                    {{ workers === 'yes' ? 'Далее' : 'Оформить' }}
                </button>

                <a
                    @click="$router.go(-1)"
                    class=" text-black bg-green-700 hover:bg-green-800
                      focus:outline-none focus:ring-4
                      focus:ring-green-300 font-medium rounded-lg
                      text-xl ml-5 px-3 py-2.5 text-center mr-2 mb-2
                      dark:bg-green-600 dark:hover:bg-green-700
                      dark:focus:ring-green-800"
                >
                    Назад
                </a>
            </div>
        </form>
    </section>
</template>

<script setup>
    import { MovingCategories } from "@/consts/categories/moving";
    import { PayMethod } from '@/consts/pay';
    import Header from "@/components/Header.vue";
    import Back from "@/components/Buttons/Back.vue";
</script>

<script>
import { useAppHistory } from '@/stores/app/history';
import { useNewAppStore } from '@/stores/app/new';
import { PayMethod, Message, Price } from '@/consts/pay';
import { ServiceTypes } from "@/consts/service_type";

import _ from 'lodash';
import {MovingCategories} from "@/consts/categories/moving";
import {copy} from "@/services/application";
import {usePhoneStore} from "@/stores/app/phone";

const historyStore = useAppHistory();
const newAppStore = useNewAppStore();
const phoneStore = usePhoneStore();

export default {
    computed: {
        applicationAddress() {
            return this.application.address;
        },
        applicationWaypoints() {
            const count = this.application.waypoints.length;
            let lengths = 0;
            for (let i = 0; i < count; i++) {
                lengths += this.application.waypoints[i];
            }
            return {count: count, lengths: lengths};
        },
        applicationAddressTo() {
            return this.application.address_to;
        },
        applicationDate() {
            return this.application.date;
        },
        applicationTime() {
            return this.application.time;
        },
        applicationWorkerTotal() {
            return this.application.worker_total;
        },
        applicationHourlyJob() {
            return this.application.hourly_job;
        },
        applicationWhatToDo() {
            return this.application.what_to_do;
        },
        applicationDriverPrice() {
          return this.application.driver_price;
        },
        applicationPriceForDriver() {
          return this.application.price_for_driver;
        },
        isClientPhoneAdded() {
          return this.client_has_second_phone;
        },
        dateError() {
          return this.errors.date;
        },
        timeHoursError() {
          return this.errors.time_hours;
        },
        timeMinutesError() {
          return this.errors.time_minutes;
        },
        workerTotalError() {
          return this.errors.worker_total;
        },
        driverPriceError() {
          return this.errors.driver_price;
        },
        priceForWorkerError() {
            return this.errors.price_for_driver;
        },
    },

    watch: {
        /**
         * @see applicationAddress
         * @param newAddress
         */
        applicationAddress: _.debounce(function (newAddress) {
            this.saveToStore();
        }, 500),

        /**
         * @see applicationWaypoints
         * @param newWaypoints
         */
        applicationWaypoints: _.debounce(function (newWaypoints) {
            console.log(newWaypoints);
            this.saveToStore();
        }, 500),

        /**
         * @see applicationAddressTo
         * @param newAddressTo
         */
        applicationAddressTo: _.debounce(function (newAddressTo) {
            this.saveToStore();
        }, 500),

        /**
         * @see applicationDriverPrice
         * @param newDriverPrice
         */
        applicationDriverPrice: _.debounce(function (newDriverPrice) {
            this.saveToStore();
        }, 500),

        /**
         * @see applicationPriceForDriver
         * @param newPriceForDriver
         */
        applicationPriceForDriver: _.debounce(function (newPriceForDriver) {
            this.saveToStore();
        }, 500),

        /**
         * @param {string} newDate The date of the application.
         * @see applicationDate()
         */
        applicationDate: _.debounce(function(newDate) {
            this.errors.date = undefined;

            const date = newDate.split("-");
            if (!this.isValidDate(date[0], date[1], date[2])) {
                this.errors.date = "Неправильная дата!";
            }

            this.saveToStore();
        }, 500),

        /**
         * @param {string} newTime The time of the application.
         * @see applicationTime()
         */
        applicationTime: _.debounce(function(newTime) {
            this.saveToStore();
        }, 500),

        /**
         * @param {number} newHours
         */
        time_hours: _.debounce(function (newHours) {
            this.errors.time_hours = undefined;

            if (newHours < 0 || newHours > 24) {
                this.error = true;
                this.errors.time_hours = 'Неверное количество часов';
            }

            this.application.time = this.time_hours + ':' + this.time_minutes;
        }, 500),

        time_minutes: _.debounce(function (newMinutes) {
            this.errors.time_minutes = undefined;

            if (newMinutes < 0 || newMinutes > 60) {
                this.error = true;
                this.errors.time_minutes = 'Неверное количество минут';
            }

            this.application.time = this.time_hours + ':' + this.time_minutes;
        }, 500),

        /**
         * @see applicationWhatToDo
         * @param newWhatToDo
         */
        applicationWhatToDo: _.debounce(function (newWhatToDo) {
            this.saveToStore();
        }, 500)
    },

    data: function () {
        return {
            additionClientPhoneKey: 0,

            client_has_second_phone: undefined,

            saved_app_values: false,
            appGotFromHistory: false,

            /**
             * @type {Application}
             */
            application: {
                id: 0,
                service_type: ServiceTypes.moving.val,
                category: this.category,
                what_to_do: '',

                address: '',
                waypoints: [],
                address_to: '',

                date: '',
                time: '',

                price: Price.perHour.LOADER.normal,
                price_for_worker:
                    Price.perHour.LOADER.normal -
                    Price.perHour.OUR_FOR_LOADERS,

                driver_price: 0,
                price_for_driver: 0,

                hourly_job: 1,
                edg: 0,
                pay_method: 1,
                client_pay: null,
                client_phone_number: '',
                state: 1,
                income: 0,
                outcome: 0,
                profit: 0,
                floor: 1,
                elevator: false,
                taxi: false,
                give_tools: null,
                worker_count: 2,
                worker_total: 2,
                dispatcher_id: 0,
            },

            cwaIsOpen: 0,   //parsed text area is open or not
            success: false,
            time_hours: '',
            time_minutes: '',
            action: 'create',

            error: false,
            errors: {
                application: undefined,
                date: undefined,
                outcome: undefined,
                worker_total: undefined,
                driver_price: undefined,
                price_for_driver: undefined,
                what_to_do: undefined,
                time_hours: undefined,
                time_minutes: undefined
            },
        }
    },

    methods: {
        /**
         * @param {string} str
         */
        isNormalInt: function (str) {
            return /^\+?(0|[1-9]\d*)$/.test(str);
        },

        current_day: function (sp) {
            const today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1; //As January is 0.
            const yyyy = today.getFullYear();

            if(dd<10) dd='0'+dd;
            if(mm<10) mm='0'+mm;
            return (yyyy+sp+mm+sp+dd);
        },

        addWaypoint() {
            this.application.waypoints.push("");
        },

        saveForm() {
            this.application.time = this.time_hours + ':' + this.time_minutes;

            const date = this.application.date.split("-");
            if (!this.isValidDate(date[0], date[1], date[2])) {
                document.getElementById("date")
                    .scrollIntoView({block: "center", behavior: "smooth"});
                return;
            }

            if (this.time_hours < 0 || this.time_hours > 24) {
                document.getElementById("time_hours")
                    .scrollIntoView({block: "center", behavior: "smooth"});
                return;
            }

            if (this.time_minutes < 0 || this.time_minutes > 60) {
                document.getElementById("time_minutes")
                    .scrollIntoView({block: "center", behavior: "smooth"});
                return;
            }

            if (this.workers === 'yes') {
                console.log(this.application);
                console.log('appExists = ' + newAppStore.appExists);

                this.$router.push({
                    name: 'MovingSecondForm',
                    params: {
                        category: this.category
                    }
                });
            } else {
                this.$axios.post('/application/store_from_site', {
                    service_type: this.application.service_type,
                    category: MovingCategories[this.category].val,
                    address: this.application.address,
                    waypoints: JSON.stringify(this.application.waypoints),
                    address_to: this.application.address_to,
                    date: this.application.date,
                    time: this.application.time,
                    worker_total: 0,
                    price: 1,
                    price_for_worker: 1,
                    driver_price: this.application.driver_price,
                    price_for_driver: this.application.price_for_driver,
                    hourly_job: this.application.hourly_job,
                    what_to_do: this.application.what_to_do,
                    give_tools: this.application.give_tools,
                    pay_method: this.application.pay_method,
                    client_pay: this.application.client_pay,
                    client_phone_number: this.application.client_phone_number,
                    dispatcher_id: 0,
                    android_app: 1,
                    taxi_was_payed: 0,
                }).then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        this.success = true;
                        this.application.id = response.data.id;
                        historyStore.push(this.application);
                        historyStore.delete(0);
                        this.$router.push({name: 'Finish'});
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },

        /**
         * save to history or newApp store
         */
        saveToStore() {
            if (this.saved_app_values) {
                if (this.appGotFromHistory) {
                    historyStore.save(this.application);
                } else {
                    newAppStore.save(this.application);
                }
            }
        },

        /**
         * @param {string} year
         * @param {string} month
         * @param {string} day
         */
        isValidDate(year, month, day) {
            const d = new Date(Number(year), Number(month) - 1, Number(day));
            return Number(month) === d.getMonth() + 1;
        },

        addClientPhone() {
            this.client_has_second_phone = true;
        },

        removeClientPhone() {
            this.client_has_second_phone = false;
        },

        /**
         *
         * @param {Application} app
         */
        saveAppValues(app) {
            for (const [key, value] of Object.entries(app)) {
                if (value) {
                    this.application[key] = value;
                }
            }
        },

        /**
         *
         * @param {Application} app
         */
        saveAppTime(app) {
            this.time_hours = app.time.slice(0, app.time.indexOf(':'));
            this.time_minutes = app.time.slice(app.time.indexOf(':') + 1);
        },
    },

    props: {
        appId: String,
        category: String,
        workers: String
    },
    setup(props) {

    },

    created () {
        this.application.date = this.current_day('-');

        if (historyStore.appExists(0)) {
            console.log('here');
            const app = historyStore.getApp(0);
            if (app && app.service_type === this.application.service_type) {
                copy(this.application, app, ['id', 'time']);
                this.saveAppTime(app);
            }
        } else if (this.appId) {
            const app = historyStore.getApp(Number(this.appId));
            if (app) {
                this.appGotFromHistory = true;
                copy(this.application, app, ['id', 'date', 'time']);
                this.application.date = this.current_day('-');
            }
            console.log('historyStore');
            console.log(app);
        } else if (newAppStore.appExists) {
            console.log('there');
            /**
             *
             * @type {Application|null}
             */
            const app = newAppStore.app;
            if (app && app.service_type === this.application.service_type) {
                copy(this.application, app, ['time']);
                this.saveAppTime(app);

                console.log('newAppStore');
                console.log(app);
            }
        }

        this.application.id = 0;
        this.application.driver_price = Price.perHour.MOVING[this.category];
        this.application.price_for_driver = this.application.driver_price -
            Price.perHour.OUR_FOR_DRIVERS;
        this.application.category = this.category;
        this.saveToStore();

        if (phoneStore.phoneExists) {
            this.application.client_phone_number = phoneStore.phone;
        }

        console.log('category = ' + this.category);
        console.log('workers = ' + this.workers);
    },

    updated() {
        this.saved_app_values = true;
    }
}
</script>


<style scoped>
    body {
      margin: 0;
    }
    #text {
      height: 25vh;
    }
    .help-block{
      color: red;
    }
</style>