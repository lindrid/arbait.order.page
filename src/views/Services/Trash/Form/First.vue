<template>
    <BackBtn :icon="false"
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

        <div
            v-if="category === 'construct'"
            class="flex items-start 2xl:mt-7 xl:mt-5 mt-3"
        >
            <div class="flex items-center h-5">
                <input
                    id="insulation"
                    type="checkbox"
                    v-model="application.insulation"
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
            <label for="insulation"
                   class=" ml-2 text-xl font-medium
                        text-gray-900
                        dark:text-black"
            >
                Есть утеплитель
            </label>
        </div>

        <div
            v-if="category === 'construct'"
            class="flex items-start 2xl:mt-7 xl:mt-5 mt-3"
        >
            <div class="flex items-center h-5">
                <input
                    id="glass_wool"
                    type="checkbox"
                    v-model="application.glass_wool"
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
            <label for="glass_wool"
                   class=" ml-2 text-xl font-medium
                        text-gray-900
                        dark:text-black"
            >
                Есть вата
            </label>
        </div>

        <div
            v-if="category === 'collect'"
            class="flex items-start 2xl:mt-7 xl:mt-5 mt-3"
        >
            <div class="flex items-center h-5">
                <input
                    id="tires"
                    type="checkbox"
                    v-model="application.tires"
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
            <label for="tires"
                   class=" ml-2 text-xl font-medium
                        text-gray-900
                        dark:text-black"
            >
                Есть покрышки
            </label>
        </div>

        <div
            class="2xl:mt-6 xl:mt-4 mt-2"
        >
            <span class="text-xl">
                <b class="text-red-700">
                    Цена за вывоз
                </b>
                {{ TrashCategories[category].formLabel }}

                <b class="text-red-700">
                    {{ TrashTrucks[truck].formLabel }}
                </b>

                составляет

                <b class="text-red-700">
                    приблизительно
                    {{ applicationDriverPrice }} р.
                </b>
            </span>

            <br>

            <span class="text-xl">
                Приблизительная цена указана для полной машины.
            </span>

            <br>

            <span class="text-xl">
                Будет меньше - будет дешевле,
                больше - дороже.
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

        <radial-progress-bar
            v-if="showBar"
            :diameter="200"
            :completed-steps="progressBar.completed"
            :total-steps="progressBar.total">
            <b style="font-size: x-large">Загрузка</b>
        </radial-progress-bar>

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
</template>

<script setup>
    import { TrashCategories} from "@/consts/categories/trash";
    import { TrashTrucks } from "@/consts/categories/trash";
    import { PayMethod } from '@/consts/pay';
    import BackBtn from "@/components/Buttons/Back.vue";
    import Back from "@/components/Buttons/Back.vue";
</script>

<script>
import { useAppHistory } from '@/stores/app/history';
import { useNewAppStore } from '@/stores/app/new';
import { PayMethod, Message, Price } from '@/consts/pay';
import { ServiceTypes } from "@/consts/service_type";
import { TrashCategories } from "@/consts/categories/trash";

import _ from 'lodash';
import {copy} from "@/services/application";
import {usePhoneStore} from "@/stores/app/phone";
import router from "@/router";
import RadialProgress from "vue3-radial-progress";

const historyStore = useAppHistory();
const newAppStore = useNewAppStore();
const phoneStore = usePhoneStore();

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
        applicationDriverPrice() {
          return this.application.driver_price;
        },
        applicationPriceForDriver() {
          return this.application.price_for_driver;
        },
        isClientPhoneAdded() {
          return this.client_has_second_phone;
        },
        applicationInsulation() {
            return this.application.insulation;
        },
        applicationGlassWool() {
            return this.application.glass_wool;
        },
        applicationTires() {
            return this.application.tires;
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
            if (this.saved_app_values) {
                if (!this.appGotFromHistory) {
                    newAppStore.save(this.application);
                }
            }
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
            }

            if (this.saved_app_values) {
                if (!this.appGotFromHistory) {
                    newAppStore.save(this.application);
                }
            }
        }, 250),

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
        }, 50),

        time_minutes: _.debounce(function (newMinutes) {
            this.errors.time_minutes = undefined;

            if (newMinutes < 0 || newMinutes > 60) {
                this.error = true;
                this.errors.time_minutes = 'Неверное количество минут';
            }

            this.application.time = this.time_hours + ':' + this.time_minutes;
        }, 50),

        /**
         * @see applicationInsulation
         * @param newInsulation
         */
        applicationInsulation: _.debounce(function (newInsulation) {
            if (this.saved_app_values) {
                if (newInsulation) {
                    this.application.driver_price += Price.TRASH.insulation;
                    this.application.price_for_driver += Price.TRASH.insulation;
                } else {
                    this.application.driver_price -= Price.TRASH.insulation;
                    this.application.price_for_driver -= Price.TRASH.insulation;
                }

                if (!this.appGotFromHistory) {
                    newAppStore.save(this.application);
                }
            }
        }, 50),

        /**
         * @see applicationGlassWool
         * @param newGlassWool
         */
        applicationGlassWool: _.debounce(function (newGlassWool) {
            if (this.saved_app_values) {
                if (newGlassWool) {
                    this.application.driver_price += Price.TRASH.glass_wool;
                    this.application.price_for_driver += Price.TRASH.glass_wool;
                } else {
                    this.application.driver_price -= Price.TRASH.glass_wool;
                    this.application.price_for_driver -= Price.TRASH.glass_wool;
                }

                if (!this.appGotFromHistory) {
                    newAppStore.save(this.application);
                }
            }
        }, 50),

        /**
         * @see applicationTires
         * @param newTires
         */
        applicationTires: _.debounce(function (newTires) {
            if (this.saved_app_values) {
                if (newTires) {
                    this.application.driver_price += Price.TRASH.tires;
                    this.application.price_for_driver += Price.TRASH.tires;
                } else {
                    this.application.driver_price -= Price.TRASH.tires;
                    this.application.price_for_driver -= Price.TRASH.tires;
                }

                if (!this.appGotFromHistory) {
                    newAppStore.save(this.application);
                }
            }
        }, 50),

        /**
         * @see applicationWhatToDo
         * @param newWhatToDo
         */
        applicationWhatToDo: _.debounce(function (newWhatToDo) {
            if (this.saved_app_values) {
                newAppStore.save(this.application);
            }
        }, 250)
    },


    data: function () {
        return {
            showBar: false,
            progressBar: {
                completed: 0,
                total: 5
            },

            additionClientPhoneKey: 0,

            client_has_second_phone: undefined,

            saved_app_values: false,
            appGotFromHistory: false,

            /**
             * @type {Application}
             */
            application: {
                id: 0,
                service_type: ServiceTypes.trash.val,
                category: this.category,
                what_to_do: '',
                address: '',
                address_to: '',
                date: '',
                time: '',

                price: Price.perHour.LOADER.hard,
                price_for_worker:
                    Price.perHour.LOADER.hard -
                    Price.perHour.OUR_FOR_LOADERS,

                driver_price: 0,
                price_for_driver: 0,

                hourly_job: false,
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
                insulation: false,
                glass_wool: false,
                tires: false
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
                console.log(this.application);
                newAppStore.save(this.application);

                this.$router.push({
                    path: '/form/trash/second'
                });
            } else {
                this.showBar = true;
                for(let i = 0; i < this.progressBar.total; i++) {
                    this.progressingTheBar(200);
                }

                this.$axios.post('/application/store_from_site', {
                    service_type: this.application.service_type,
                    category: TrashCategories[this.category].val,
                    address: this.application.address,
                    address_to: this.application.address_to,
                    date: this.application.date,
                    time: this.application.time,
                    worker_total: 1,
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
                        phoneStore.save(this.application.client_phone_number);
                        this.progressBar.completed = this.progressBar.total;

                        (async () => {
                            await router.push({path: '/form/finish'});
                            await router.go(0);
                        })()
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

        /**
         *
         * @param {Application} app
         */
        assignTime(app) {
            this.time_hours = app.time.slice(0, app.time.indexOf(':'));
            this.time_minutes = app.time.slice(app.time.indexOf(':') + 1);
        },

        progressingTheBar(timeout) {
            const app = this;
            setTimeout(function () {
                app.progressBar.completed++;
            }, timeout);
        }
    },

    props: {
        appId: Number,
        category: String,
        truck: String,
        workers: String
    },
    setup(props) {

    },

    created () {
        this.application.date = this.current_day('-');

        if (this.appId) {
            const app = historyStore.getApp(this.appId);
            if (app) {
                copy(this.application, app, ['date', 'time']);
                this.application.date = this.current_day('-');

                console.log('historyStore');
                console.log(app);
            }
        } else if (newAppStore.appExists) {
            /**
             *
             * @type {Application|null}
             */
            const app = newAppStore.app;
            if (app && app.service_type === this.application.service_type) {
                copy(this.application, app);
                this.assignTime(app);

                console.log('newAppStore');
                console.log(app);
            }
        }

        if (phoneStore.phoneExists) {
            this.application.client_phone_number = phoneStore.phone;
        }

        this.application.driver_price = Price.TRASH[this.category][this.truck];
        this.application.price_for_driver = Price.TRASH[this.category][this.truck] -
            Price.TRASH.our;

        console.log('category = ' + this.category);
        console.log('workers = ' + this.workers);
        console.log('price =' + Price.TRASH[this.category][this.truck]);
        console.log('application.price_for_driver =' + this.application.price_for_driver);
    },

    updated() {
        this.saved_app_values = true;
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