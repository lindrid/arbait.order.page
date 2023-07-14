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
                <b class="text-xl">Адрес</b>
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


            <div class="2xl:mt-6 xl:mt-4 mt-2">
                <b class="text-xl block">Грузчиков</b>
                <input id="time_hours"
                       type="text"
                       ref="th"
                       v-model="application.worker_total"
                       @focus="$event.target.select()"
                       placeholder="Сколько человек"
                       class="
              bg-gray-50 border
              border-gray-300
              text-right
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
                > <span class="text-xl">чел</span>
                <span class="help-block" v-if="workerTotalError">{{ workerTotalError }}</span>
            </div>

            <div class="2xl:mt-6 xl:mt-4 mt-2">
                <b class="text-xl block">Оплата</b>
                <fieldset class="ml-4">
                    <div class="flex items-center ">
                        <input
                            id="hour_format"
                            type="radio"
                            name="pay_format"
                            v-bind:value="1"
                            v-model="application.hourly_job"

                            class="
                      w-4 h-4 border-gray-300
                      focus:ring-2 focus:ring-blue-300
                      dark:focus:ring-blue-600
                      dark:focus:bg-blue-600
                      dark:bg-gray-300
                      dark:border-gray-600"
                            checked
                        >
                        <label for="hour_format"
                               class="block ml-2 text-xl
                          font-medium text-black
                          dark:text-black"
                        >
                            По часам
                        </label>
                    </div>

                    <div class="flex items-center">
                        <input
                            id="piece_rate_format"
                            type="radio"
                            name="pay_format"
                            v-bind:value="0"
                            v-model="application.hourly_job"
                            class=" w-4 h-4 border-gray-300
                    focus:ring-2 focus:ring-blue-300
                    dark:focus:ring-blue-600
                    dark:focus:bg-blue-600
                    dark:bg-gray-300
                    dark:border-gray-600"
                        >
                        <label for="piece_rate_format"
                               class="block ml-2 text-xl
                          font-medium text-black
                          dark:text-black"
                        >
                            Фиксированная (за 8 часов)
                        </label>
                    </div>
                </fieldset>
            </div>


            <div class="2xl:mt-6 xl:mt-4 mt-2">
                <b class="text-xl block">Что делать?</b>
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
          <b class="text-red-700">Цена - </b>
          <span v-if="applicationHourlyJob">
            {{ applicationPrice }} р./час
          </span>
          <span v-else>
            {{ applicationPrice }}
            {{ Number.isInteger(applicationPrice) ? 'р.' : '' }}
          </span>
        </span>
            </div>

            <div class="2xl:mt-8 xl:mt-6 mt-4">
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

            <radial-progress-bar
                    v-if="showBar"
                    :diameter="200"
                    :completed-steps="progressBar.completed"
                    :total-steps="progressBar.total">
                <b style="font-size: x-large">Загрузка</b>
            </radial-progress-bar>

            <div class="2xl:mt-6 xl:mt-4 mt-2">
                <b class="text-xl block">Этаж</b>
                <input id="floor"
                       type="text"
                       ref="th"
                       v-model="application.floor"
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
            </div>

            <div class="flex items-start 2xl:mt-7 xl:mt-5 mt-3">
                <div class="flex items-center h-5">
                    <input
                        id="elevator"
                        type="checkbox"
                        v-model="application.elevator"
                        class=" w-4 h-4 border border-gray-300
                                  rounded bg-gray-50 focus:ring-3
                                  focus:ring-blue-300
                                  dark:bg-gray-300
                                  dark:border-gray-600
                                  dark:focus:ring-blue-600
                                  dark:ring-offset-gray-800
                                  dark:focus:ring-offset-gray-800"
                    >
                </div>
                <label for="elevator"
                       class="ml-2 text-xl font-medium
                                  text-gray-900
                                  dark:text-black"
                >
                    Есть лифт
                </label>
            </div>

            <div class="flex items-start 2xl:mt-7 xl:mt-5 mt-3">
                <div class="flex items-center h-5">
                    <input
                        id="taxi"
                        type="checkbox"
                        v-model="application.taxi"
                        class=" w-4 h-4 border border-gray-300
                      rounded bg-gray-50 focus:ring-3
                      focus:ring-blue-300
                      dark:bg-gray-300
                      dark:border-gray-600
                      dark:focus:ring-blue-600
                      dark:ring-offset-gray-800
                      dark:focus:ring-offset-gray-800"
                    >
                </div>
                <label for="taxi"
                       class="ml-2 text-xl font-medium
                      text-gray-900
                      dark:text-black"
                >
                    Такси для грузчиков
                </label>
            </div>

            <div class="2xl:mt-6 xl:mt-4 mt-2">
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

                <button
                    class="btn btn-default"
                    @click="addClientPhone()"
                    :disabled="isClientPhoneAdded"
                >
                    <i class="glyphicon glyphicon-plus"></i>
                </button>

                <button
                    class="btn btn-default"
                    @click="removeClientPhone()"
                    :disabled="!isClientPhoneAdded"
                >
                    <i class="glyphicon glyphicon-minus"></i>
                </button>

                <input v-if="client_has_second_phone"
                       id = "addl_client_phone_number"
                       type="tel"
                       v-model="application.addl_client_phone_number"
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
                    Оформить
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
    import { PayMethod } from "@/consts/pay";
    import Header from "@/components/Header.vue";
    import Back from "@/components/Buttons/Back.vue";
</script>

<script>
import router from '@/router';
import _ from 'lodash';

import { useAppHistory } from '@/stores/app/history';
import { useNewAppStore } from "@/stores/app/new";
import {copy, isItHardWork} from "@/services/application";
import {Price} from "@/consts/pay";
import {ServiceTypes} from "@/consts/service_type";
import {usePhoneStore} from "@/stores/app/phone";
import RadialProgress from "vue3-radial-progress";
import {useRepeatStore} from "@/stores/app/repeat";

const historyStore = useAppHistory();
const newAppStore = useNewAppStore();
const phoneStore = usePhoneStore();
const repeatStore = useRepeatStore();

export default {
    components: {
        RadialProgress
    },
    computed: {
        applicationAddress() {
            return this.application.address;
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
        applicationPrice() {
            return this.application.price;
        },
        applicationPriceForWorker() {
            return this.application.price_for_worker;
        },
        applicationPayMethod() {
            return this.application.pay_method;
        },
        applicationFloor() {
            return this.application.floor;
        },
        applicationElevator() {
            return this.application.elevator;
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
        priceError() {
          return this.errors.price;
        },
        priceForWorkerError() {
            return this.errors.price_for_worker;
        },
    },

    watch: {
        /**
         * @see applicationAddress
         * @param newAddress
         */
        applicationAddress: _.debounce(function (newAddress) {
            this.saveToStore();
        }, 250),

        /**
         * @param {string} newDate The date of the application.
         * @see applicationDate()
         */
        applicationDate: _.debounce(function(newDate) {
            this.errors.date = undefined;

            const date = newDate.split("-");
            if (!this.isValidDate(date[0], date[1], date[2])) {
                this.errors.date = "Неправильная дата!";
                return;
            }

            this.saveToStore();
        }, 250),

        /**
         * @param {number} newHours
         */
        time_hours: _.debounce(function (newHours) {
            this.errors.time_hours = undefined;

            if (newHours < 0 || newHours > 24) {
                this.error = true;
                this.errors.time_hours = 'Неверное количество часов';
                return;
            }

            this.application.time = this.time_hours + ':' + this.time_minutes;
        }, 250),

        time_minutes: _.debounce(function (newMinutes) {
            this.errors.time_minutes = undefined;

            if (newMinutes < 0 || newMinutes > 59) {
                this.error = true;
                this.errors.time_minutes = 'Неверное количество минут';
                return;
            }

            this.application.time = this.time_hours + ':' + this.time_minutes;
        }, 250),

        /**
         * @see applicationTime()
         * @param newTime
         */
        applicationTime: _.debounce(function(newTime) {
            this.saveToStore();
        }, 250),

        /**
         * @param {string} newWorkerTotal
         * @see applicationWorkerTotal
         */
        applicationWorkerTotal: _.debounce(function (newWorkerTotal) {
            this.errors.worker_total = undefined;
            console.log(typeof(newWorkerTotal));
            console.log(newWorkerTotal);

            if (!this.isNormalInt(newWorkerTotal) || newWorkerTotal < 1 || newWorkerTotal > 30) {
                this.errors.worker_total = 'Неверное количество работников!';
                return;
            }

            this.saveToStore();
        }, 250),

        /**
         *
         * @param {number} hourly
         * @see applicationHourlyJob
         */
        applicationHourlyJob: _.debounce(function (hourly) {
            this.setPrices();
            this.saveToStore();
        }, 250),

        /**
        * @param {number} newVal
        */
        applicationWhatToDo: _.debounce(function(newVal) {
            this.setPrices();
            this.saveToStore();
        }, 250),

        /**
         * @param {number} newPrice
         * @see applicationPrice
         */
        applicationPrice: _.debounce(function (newPrice) {
            this.errors.price = undefined;

            if (newPrice <= 0) {
                this.errors.price = 'Неверная цена!';
                return;
            }

            this.saveToStore();
        }, 250),

        /**
         * @param {number} newPriceForWorker
         * @see applicationPriceForWorker
         */
        applicationPriceForWorker: _.debounce(function (newPriceForWorker) {
            this.errors.price_for_worker = undefined;

            if (newPriceForWorker <= 0) {
                this.errors.price_for_worker = 'Неверная цена для рабочего!';
            }
        }, 250),

        /**
         *
         * @param {number} newVal
         * @see applicationPayMethod()
         */
        applicationPayMethod: function (newVal) {
            this.saveToStore();
        },

        /**
         * @see applicationFloor
         */
        applicationFloor: _.debounce(function (newFloor) {
            console.log(newFloor);
            this.setPrices();
            this.saveToStore();
        }, 250),

        /**
         * @see applicationElevator
         */
        applicationElevator: _.debounce(function (newElevator) {
            this.setPrices();
            this.saveToStore();
        }, 250),
    },

    data: function () {
        return {
            showBar: false,
            progressBar: {
                completed: 0,
                total: 5
            },

            additionClientPhoneKey: 0,
            saved_app_values: false,

            client_has_second_phone: undefined,

            /**
             * @type {Application}
             */
            application: {
                id:0,
                service_type: ServiceTypes.loader.val,
                what_to_do: '',
                address: '',
                date: '',
                time: '',
                price: Price.perHour.LOADER.normal,
                price_for_worker:
                    Price.perHour.LOADER.normal -
                    Price.perHour.OUR_FOR_LOADERS,
                hourly_job: 1,
                edg: 0,
                pay_method: 1,
                client_pay: null,
                client_phone_number: '',
                addl_client_phone_number: '',
                state: 1,
                income: 0,
                outcome: 0,
                profit: 0,
                worker_count: 2,
                worker_total: 2,
                dispatcher_id: 0,
                taxi: false,
                floor: 1,
                elevator: false,
            },

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
                price: undefined,
                price_for_worker: undefined,
                what_to_do: undefined,
                time_hours: undefined,
                time_minutes: undefined
            },
        }
    },

    methods: {
        /**
         * save to history or newApp store
         */
        saveToStore() {
            if (this.saved_app_values) {
                if (this.appGotFromHistory) {
                    historyStore.save(this.application);
                    repeatStore.save(Number(this.appId));
                } else {
                    newAppStore.save(this.application);
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

        /**
         * Добавка к цене за этажы:
         *
         * 4-6 +25
         *
         * 7-9 +50
         *
         * 10-12 +75
         *
         * 13-15 +100
         *
         * @param {number} newFloor
         */
        increasePriceForFloor(newFloor) {
            let addition = 0;
            if (4 <= newFloor && newFloor <= 6) {
                addition = 25;
            } else if (7 <= newFloor && newFloor <= 9) {
                addition = 50;
            } else if (10 <= newFloor && newFloor <= 12) {
                addition = 75;
            } else if (12 < newFloor) {
                addition = 100;
            }

            this.application.price += addition;
            this.application.price_for_worker += addition;

            if (this.application.price > 450) {
                this.application.price = 450;
            }

            if (this.application.price_for_worker > 400) {
                this.application.price_for_worker = 400;
            }
        },

        setPrices() {
            const hardWork = isItHardWork(this.applicationWhatToDo);
            console.log(hardWork);

            const perPrice = this.applicationHourlyJob ?
                Price.perHour :
                Price.perDay;

            const c = this.applicationHourlyJob ? 1 : 8;

            this.application.price = hardWork ?
                perPrice.LOADER.hard :
                perPrice.LOADER.normal;

            this.application.price_for_worker =
                this.application.price -
                c * Price.perHour.OUR_FOR_LOADERS;

            if (!!this.application.elevator === false) {
                this.increasePriceForFloor(this.application.floor);
            }
        },

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

            const addl_client_phone_number = this.client_has_second_phone ?
                this.application.addl_client_phone_number : null;

            this.showBar = true;
            for(let i = 0; i < this.progressBar.total; i++) {
                this.progressingTheBar(200);
            }

            this.$axios.post('/application/store_from_site', {
                service_type: this.application.service_type,
                address: this.application.address,
                date: this.application.date,
                time: this.application.time,
                worker_total: this.application.worker_total,
                price: this.application.price,
                price_for_worker: this.application.price_for_worker,
                hourly_job: this.application.hourly_job,
                what_to_do: this.application.what_to_do,
                edg: this.application.edg,
                pay_method: this.application.pay_method,
                client_pay: this.application.client_pay,
                client_phone_number: this.application.client_phone_number,
                dispatcher_id: 0,
                android_app: 1,
                floor: this.application.floor,
                elevator: this.application.elevator,
                taxi: this.application.taxi,
                taxi_was_payed: 0
            }).then(response => {
                console.log(response);
                if (response.status === 200) {
                    this.success = true;
                    this.application.id = response.data.id;

                    historyStore.push(this.application);
                    newAppStore.clear();
                    repeatStore.clear();
                    historyStore.delete(0);
                    phoneStore.save(this.application.client_phone_number);
                    this.progressBar.completed = this.progressBar.total;

                    (async () => {
                        await router.push({path: '/form/finish'});
                        await router.go(0);
                    })()
                }
            }).catch(function (error) {
                console.log(error);
                this.$Progress.fail();
            })
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
        assignTime(app) {
            this.time_hours = app.time.slice(0, app.time.indexOf(':'));
            this.time_minutes = app.time.slice(app.time.indexOf(':') + 1);
        },


        showById() {
            const app = historyStore.getApp(Number(this.appId));
            if (app) {
                copy(this.application, app, ['id', 'date', 'time']);
                this.appGotFromHistory = true;
            } else {
                console.log('error')
            }
            console.log('showById');
            console.log(app);
        },

        showUpdated() {
            /**
             *
             * @type {Application|null}
             */
            const app = historyStore.getApp(0);
            const hasAppSameType = app.service_type === this.application.service_type
            if (app && hasAppSameType) {
                copy(this.application, app);
                this.saveAppTime(app);
                this.appGotFromHistory = true;
            } else {
                this.showById();
            }
            console.log('showUpdated');
            console.log(app);
        },

        showNewlyCreated() {
            /**
             *
             * @type {Application|null}
             */
            const app = newAppStore.app;
            if (app === null) {
                return;
            }
            const hasAppSameType = app.service_type === this.application.service_type
            if (app && hasAppSameType) {
                copy(this.application, app);
                this.saveAppTime(app);
            }
            console.log('showNewlyCreated');
            console.log(app);
        },

        progressingTheBar(timeout) {
            const app = this;
            setTimeout(function () {
                app.progressBar.completed++;
            }, timeout);
        }
    },

    props: {
        appId: String
    },

    mounted() {
    },

    created () {
        console.log('appId = ');
        console.log(this.appId);

        const isItNewApp = !this.appId;

        if (isItNewApp) {
            this.showNewlyCreated();
        } else {
            if (historyStore.appExists(0)) {
                if (repeatStore.equal(Number(this.appId))) {
                    this.showUpdated();
                } else {
                    this.showById();
                }
            } else {
                this.showById();
            }
        }

        const currentDay =  this.current_day('-');
        if (this.application.date < currentDay) {
            this.application.date = currentDay;
        }

        if (phoneStore.phoneExists) {
            this.application.client_phone_number = phoneStore.phone;
        }

        this.setPrices();
    },

    updated() {
        this.saved_app_values = true;
    }
}
</script>

<style scoped>
    #text {
      height: 25vh;
    }
    .help-block{
      color: red;
    }
</style>