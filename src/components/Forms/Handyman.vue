<template>
    <a
        @click="$router.go(-1)"
        class=" text-black bg-green-700 hover:bg-green-800
              focus:outline-none focus:ring-4
              focus:ring-green-300 font-medium rounded-lg
              text-xl px-3 py-2.5 text-center
              dark:bg-green-600 dark:hover:bg-green-700
              dark:focus:ring-green-800"
    >
        Назад
    </a>

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
                class=" bg-gray-50 border
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
            <b class="text-xl block">{{ label }}</b>
            <input id="time_hours"
                type="text"
                ref="th"
                v-model="application.worker_total"
                @focus="$event.target.select()"
                placeholder="Сколько человек"
                class=" bg-gray-50 border
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
            >
            <span class="text-xl">чел</span>
            <span class="help-block"
                  v-if="workerTotalError"
            >
                {{ workerTotalError }}
            </span>
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

        <div class="flex items-start 2xl:mt-7 xl:mt-5 mt-3">
            <div class="flex items-center h-5">
                <input
                    id="taxi"
                    type="checkbox"
                    v-model="application.give_tools"
                    class="w-4 h-4 border border-gray-300
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
                Предоставлю инструмент (цена будет меньше)
            </label>
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

                        class="w-4 h-4 border-gray-300
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
            <span class="text-xl">
                <b class="text-red-700">Цена - </b>
                <span>
                    {{ applicationPrice }}
                    {{
                        Number.isInteger(applicationPrice) ?
                            applicationHourlyJob ? 'р/час' : 'р.' :
                            ''
                    }}
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
                        v-bind:value="PAY_METHOD_CARD"
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
                        v-bind:value="PAY_METHOD_CASH"
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

        <div class="2xl:mt-6 xl:mt-4 mt-2">
            <label for="client_phone_number" class="text-xl block"><b>Ваш телефон для связи</b></label>
            <input
                id = "client_phone_number"
                type="tel"
                v-model="application.client_phone_number"
                class=" bg-gray-50 border
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

            <span
                class="help-block" id="client_phone_number_help_block"
                v-if="error && errors.client_phone_number"
            >
                {{ errors.client_phone_number }}
            </span>
        </div>

        <div class="2xl:mt-8 xl:mt-6 mt-4">
            <button
                type="submit"
                class=" focus:outline-none text-black bg-yellow-400
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
</template>

<script>
import { useAppHistory } from '@/stores/app/history';
import router from '@/router';
import _ from 'lodash';

const store = useAppHistory();

export default {
    computed: {
        applicationWhatToDo() {
            return this.application.what_to_do;
        },
        applicationTools() {
            return this.application.give_tools;
        },
        applicationDate() {
          return this.application.date;
        },
        applicationWorkerTotal() {
          return this.application.worker_total;
        },
        applicationHourlyJob() {
          return this.application.hourly_job;
        },
        applicationPrice() {
          return this.application.price;
        },
        applicationPriceForWorker() {
          return this.application.price_for_worker;
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
        // whenever time_hours changes, this function will run
        /**
         * @param {number} newHours
         */
        time_hours: _.debounce(function (newHours) {
            this.errors.time_hours = undefined;

            if (newHours < 0 || newHours > 24) {
                this.error = true;
                this.errors.time_hours = 'Неверное количество часов';
            }
        }, 500),

        time_minutes: _.debounce(function (newMinutes) {
            this.errors.time_minutes = undefined;

            if (newMinutes < 0 || newMinutes > 60) {
                this.error = true;
                this.errors.time_minutes = 'Неверное количество минут';
            }
        }, 500),

        /**
         * @param {string} newDate The date of the application.
         * @see applicationDate()
         */
        applicationDate: function(newDate) {
            this.errors.date = undefined;

            const date = newDate.split("-");
            if (!this.isValidDate(date[0], date[1], date[2])) {
                this.errors.date = "Неправильная дата!";
            }
        },

        /**
         * @param newGiveTools
         * @see applicationTools()
         */
        applicationTools (newGiveTools) {
            this.application.price = this.getPrice();
            this.application.price_for_worker = this.getPriceForWorker();
        },

        /**
         * @param {string} newWorkerTotal
         * @see applicationWorkerTotal
         */
        applicationWorkerTotal: function (newWorkerTotal) {
            this.errors.worker_total = undefined;
            console.log(typeof(newWorkerTotal));
            console.log(newWorkerTotal);

            if (!this.isNormalInt(newWorkerTotal) || newWorkerTotal < 1 || newWorkerTotal > 30) {
                this.errors.worker_total = 'Неверное количество работников!';
            }
        },

        /**
         * @param {number} newPrice
         * @see applicationPrice
         */
        applicationPrice: function (newPrice) {
            this.errors.price = undefined;

            if (newPrice <= 0) {
                this.errors.price = 'Неверная цена!';
            } else {
                this.application.price = newPrice;
            }
        },

        /**
         * @param {number} newPriceForWorker
         * @see applicationPriceForWorker
         */
        applicationPriceForWorker: function (newPriceForWorker) {
            this.errors.price_for_worker = undefined;

            if (newPriceForWorker <= 0) {
                this.errors.price_for_worker = 'Неверная цена для рабочего!';
            } else {
                this.application.price_for_worker = newPriceForWorker;
            }
        },

        /**
         *
         * @param {number} newVal
         * @see applicationHourlyJob
         */
        applicationHourlyJob: function (newVal) {
            this.application.price = this.getPrice();
            this.application.price_for_worker = this.getPriceForWorker();

        }
    },

    data: function () {
        return {
            additionClientPhoneKey: 0,

            PAY_METHOD_CARD: 1,
            PAY_METHOD_CASH: 2,

            client_has_second_phone: undefined,
            /**
             * @type {Application}
             */
            application: {
                id: 0,
                service_type: this.HANDYMAN_SERVICE_TYPE,
                category: this.DECORATOR_CATEGORY,
                address: '',
                address_to: null,
                what_to_do: '',
                date: '',
                time: '',
                price: 0,
                price_for_worker: 0,
                driver_price: null,
                price_for_driver: null,
                hourly_job: true,
                pay_method: 1,
                worker_total: 2,
                floor: null,
                elevator: null,
                taxi: false,
                give_tools: false,
                client_phone_number: '',
            },

            calc: {
                'summ': true,
                'pays': false
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

            this.$axios.post('/application/store_from_site', {
                service_type: this.HANDYMAN_SERVICE_TYPE,
                category: this.CATEGORIES[this.category],
                address: this.application.address,
                date: this.application.date,
                time: this.application.time,
                worker_total: this.application.worker_total,
                price: this.application.price,
                price_for_worker: this.application.price_for_worker,
                hourly_job: this.application.hourly_job,
                what_to_do: this.application.what_to_do,
                give_tools: this.application.give_tools,
                edg: false,
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
                    store.push(this.application);
                    router.push({name: 'Finish'});
                }
            }).catch(function (error) {
                console.log(error);
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
        saveAppValues(app) {
            this.application.id = app.id;
            this.application.service_type = app.service_type;
            this.application.category = app.category;
            this.application.address = app.address;
            this.application.date = this.current_day('-');
            this.application.worker_total = app.worker_total;
            this.application.hourly_job = app.hourly_job;
            this.application.what_to_do = app.what_to_do;
            this.application.pay_method = app.pay_method;
            this.application.floor = app.floor;
            this.application.elevator = app.elevator;
            this.application.taxi = app.taxi;
            this.application.give_tools = app.give_tools;
            this.application.client_phone_number = app.client_phone_number;
            this.application.price_for_worker = this.getPriceForWorker();
        },

        getPrice() {
            const app = this.application;
            const gt = app.give_tools;
            const tpph = this.TOOLS_PRICE_PER_HOUR;
            const apph = this.APP_PRICE_PER_HOUR_CONST;
            const ap = this.APP_PRICE_CONST;

            return app.hourly_job?
                apph[this.category] - Number(gt) * tpph :
                ap[this.category] - 8 * Number(gt) * tpph;
        },

        getPriceForWorker() {
            const app = this.application;
            const opfh = this.OUR_PRICE_FOR_HOUR;

            return app.hourly_job?
                this.getPrice() - opfh :
                this.getPrice() - 8 * opfh
        },
    },

    props: ['appId', 'label', 'category'],
    setup(props) {

    },

    created () {
        console.log(this.appId);
        console.log(this.label);
        console.log(this.category);

        this.application.date = this.current_day('-');
        this.application.price = this.getPrice();
        this.application.price_for_worker = this.getPriceForWorker();

        const app = store.getApp(this.appId);
        if (app !== null) {
            this.saveAppValues(app);
        }
    },

    beforeCreate() {
        this.HANDYMAN_SERVICE_TYPE = 1;
        this.CATEGORIES = {
            digger: 0,
            plasterer: 1,
            decorator: 2,
            other: 3,
        };

        this.TOOLS_PRICE_PER_HOUR = 50;
        this.OUR_PRICE_FOR_HOUR = 75;

        this.PRICE_MESSAGE_CONST = "договорная, с вами свяжутся после оформления заявки";

        this.APP_PRICE_PER_HOUR_CONST = {
            digger: 425,
            plasterer: 450,
            decorator: 425,
            other: 425
        };
        this.APP_PRICE_PH_FOR_WORKER_CONST = {
            digger: 350,
            plasterer: 375,
            decorator: 350,
            other: 375
        };

        this.APP_PRICE_CONST = {
            digger: 3200,
            plasterer: 3400,
            decorator: 3200,
            other: 3200
        };
        this.APP_PRICE_FOR_WORKER_CONST = {
            digger: 2700,
            plasterer: 2900,
            decorator: 2700,
            other: 2700
        };
    }
}
</script>


<style scoped>
.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.mytime, .form-group {
  font-size: 110%
}
.form-control{
  font-size: 120%;
}
.worker-count {
  width: 100px;
}
.panel {
  font-size: 130%;
}
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