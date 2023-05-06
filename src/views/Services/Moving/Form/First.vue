<template>
    <a
        @click="$router.go(-1)"
        class="text-black bg-green-700 hover:bg-green-800
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

        <div class="2xl:mt-6 xl:mt-4 mt-2">
            <span class="text-xl">
                <b class="text-red-700">Цена - </b>
                <span v-if="hasApplicationHourlyJob">
                    {{ applicationDriverPrice }}
                    {{ Number.isInteger(applicationDriverPrice) ? 'р/час' : '' }}
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
              {{ this.workers === 'yes' ? 'Далее' : 'Оформить' }}
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
        hasApplicationHourlyJob() {
          return this.application.hourly_job;
        },
        applicationDriverPrice() {
          return this.application.driver_price[this.application.hourly_job];
        },
        applicationPriceForDriver() {
          return this.application.price_for_driver[this.application.hourly_job];
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
         * @see applicationDriverPrice
         */
        applicationDriverPrice: function (newPrice) {
            this.errors.driver_price = undefined;

            if (newPrice <= 0) {
                this.errors.driver_price = 'Неверная цена!';
            }
        },

        /**
         * @param {number} newPriceForWorker
         * @see applicationPriceForDriver
         */
        applicationPriceForDriver: function (newPriceForWorker) {
            this.errors.price_for_driver = undefined;

            if (newPriceForWorker <= 0) {
                this.errors.price_for_driver = 'Неверная цена для водителя!';
            }
        },
    },

    data: function () {
        return {
            MOVING_SERVICE_TYPE: 2,
            additionClientPhoneKey: 0,

            PAY_METHOD_CARD: 1,
            PAY_METHOD_CASH: 2,

            client_has_second_phone: undefined,

            application: {
                id: 0,
                service_type: this.MOVING_SERVICE_TYPE,
                category: this.category,
                what_to_do: '',
                address: '',
                address_to: '',
                date: '',
                time: '',
                driver_price: {
                  0: this.APP_PRICE_CONST,
                  1: this.APP_PRICE_PER_HOUR_CONST
                },
                price_for_driver: {
                  0: this.APP_PRICE_FOR_DRIVER_CONST,
                  1: this.APP_PRICE_PH_FOR_DRIVER_CONST
                },
                hourly_job: 1,
                edg: 0,
                pay_method: 1,
                client_pay: null,
                client_phone_number: '',
                state: 1,
                income: 0,
                outcome: 0,
                profit: 0,
                worker_count: 2,
                worker_total: 2,
                dispatcher_id: 0,
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
                this.$router.push({
                    name: 'MovingSecondForm',
                    params: {
                        application: this.application,
                        category: this.category
                    }
                });
            } else {
                this.$axios.post('/application/store_from_site', {
                    service_type: this.HANDYMAN_SERVICE_TYPE,
                    category: this.category,
                    address: this.application.address,
                    address_to: this.application.address_to,
                    date: this.application.date,
                    time: this.application.time,
                    worker_total: this.application.worker_total,
                    driver_price: this.application.driver_price[this.application.hourly_job],
                    price_for_driver: this.application.price_for_driver[this.application.hourly_job],
                    hourly_job: this.application.hourly_job,
                    what_to_do: this.application.what_to_do,
                    give_tools: this.application.give_tools,
                    edg: this.application.edg,
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
                        store.push(this.application, this.current_day('-'));
                        this.$router.push({name: 'Finish'});
                        this.$router.push({
                            path: '/form/moving/second',
                            params: {
                                application: this.application
                            }

                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
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
            this.application.id = app.id;
            this.application.service_type = app.service_type;
            this.application.category = app.category;
            this.application.address = app.address;
            this.application.address_to = app.address_to;
            this.application.date = this.current_day('-');
            this.application.worker_total = app.worker_total;
            this.application.hourly_job = app.hourly_job;
            this.application.what_to_do = app.what_to_do;
            this.application.pay_method = app.pay_method;
            this.application.floor = app.floor;
            this.application.elevator = app.elevator;
            this.application.taxi = app.taxi;
            this.application.client_phone_number = app.client_phone_number;
            this.application.price_for_driver =  {
                0: this.APP_PRICE_FOR_DRIVER_CONST,
                1: this.APP_PRICE_PH_FOR_DRIVER_CONST
            };
        }
    },

    props: ['appId', 'category', 'workers'],
    setup(props) {

    },

    created () {
        this.application.date = this.current_day('-');

        const app = store.getApp(this.appId);
        if (app !== null) {
            this.saveAppValues(app);
        }

        console.log('application: ' + app);
        console.log('category' + this.category);
        console.log('workers' + this.workers);
    },

    beforeCreate() {
        this.PRICE_MESSAGE_CONST = "договорная, с вами свяжутся после оформления заявки";

        this.MOVING_PRICES = {
            van: 600,
            flatbed: 850,
            lorry2: 950,
            lorry3: 1150,
            lorry4: this.PRICE_MESSAGE_CONST
        };

        this.APP_PRICE_PER_HOUR_CONST = this.MOVING_PRICES[this.category];
        this.APP_PRICE_CONST = this.PRICE_MESSAGE_CONST;

        this.APP_PRICE_PH_FOR_DRIVER_CONST = this.MOVING_PRICES[this.category] - 100;
        this.APP_PRICE_FOR_DRIVER_CONST = this.PRICE_MESSAGE_CONST;
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