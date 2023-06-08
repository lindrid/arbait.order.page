<template>
    <section class="section">
        <Header/>
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

            <div
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

            <div class="2xl:mt-6 xl:mt-8 mt-6">
                <b class="text-xl block">Начало: этаж</b>
                <input
                    id="floor"
                    type="text"
                    ref="th"
                    v-model="application.floor"
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
                       class=" ml-2 text-xl font-medium
                        text-gray-900
                        dark:text-black"
                >
                    Есть лифт (начало)
                </label>
            </div>

            <div class="2xl:mt-6 xl:mt-6 mt-3">
                <b class="text-xl block">Конец: этаж</b>
                <input
                    id="floor_to"
                    type="text"
                    ref="th"
                    v-model="application.floor_to"
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
            </div>

            <div class="flex items-start 2xl:mt-7 xl:mt-5 mt-3">
                <div class="flex items-center h-5">
                    <input
                        id="elevator_to"
                        type="checkbox"
                        v-model="application.elevator_to"
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
                <label for="elevator_to"
                       class=" ml-2 text-xl font-medium
                        text-gray-900
                        dark:text-black"
                >
                    Есть лифт (конец)
                </label>
            </div>

            <div class="flex items-start 2xl:mt-10 xl:mt-8 mt-4">
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
                       class=" ml-2 text-xl font-medium
                        text-gray-900
                        dark:text-black"
                >
                    Такси для грузчиков
                </label>
            </div>

            <div class="2xl:mt-6 xl:mt-6 mt-4">
            <span class="text-xl">
                <b class="text-red-700">Цена - </b>
                <span>
                    {{ applicationPrice }}
                    {{
                        Number.isInteger(applicationPrice) ?
                            applicationHourlyJob ? 'р/час за 1 чел.' : 'р. за 1 чел.' :
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

            <div class="2xl:mt-6 xl:mt-6 mt-4">
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
                    v-if="error && errors.client_phone_number"
                    id="client_phone_number_help_block"
                    class="help-block"
                >
            {{ errors.client_phone_number }}
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
    import {PayMethod, Price} from '@/consts/pay';
    import Header from "@/components/Header.vue";
</script>

<script>
    import { useAppHistory } from '@/stores/app/history';
    import { useNewAppStore } from '@/stores/app/new';
    import { PayMethod, Price } from '@/consts/pay';
    import { ServiceTypes } from "@/consts/service_type";
    import {copy, isItHardWork} from "@/services/application";

    import router from '@/router';
    import _ from 'lodash';
    import { MovingCategories } from "@/consts/categories/moving";
    import {usePhoneStore} from "@/stores/app/phone";

    const historyStore = useAppHistory();
    const newAppStore = useNewAppStore();
    const phoneStore = usePhoneStore();

export default {

    computed: {
        applicationWorkerTotal() {
            return this.application.worker_total;
        },
        applicationWhatToDo() {
            return this.application.what_to_do;
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
        applicationPayMethod() {
            return this.application.pay_method;
        },
        applicationFloor() {
            return this.application.floor;
        },
        applicationFloorTo() {
            return this.application.floor_to;
        },
        applicationElevator() {
            return this.application.elevator;
        },
        applicationElevatorTo() {
            return this.application.elevator_to;
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
         * @see applicationFloor
         */
        applicationFloor: _.debounce(function (newFloor) {
            console.log(newFloor);

            this.setPrice();
            if (!!this.application.elevator === false) {
                this.increasePriceForFloor(newFloor);
            }
            if (!!this.application.elevator_to === false) {
                this.increasePriceForFloor(this.application.floor_to);
            }

            this.saveToStore();
        }, 250),

        /**
         * @see applicationFloorTo
         */
        applicationFloorTo: _.debounce(function (newFloor) {
            console.log(newFloor);

            this.setPrice();
            if (!!this.application.elevator_to === false) {
                this.increasePriceForFloor(newFloor);
            }
            if (!!this.application.elevator === false) {
                this.increasePriceForFloor(this.application.floor);
            }

            this.saveToStore();
        }, 250),

        /**
         * @see applicationElevator
         */
        applicationElevator: _.debounce(function (newElevator) {
            this.setPrice();
            if (!!newElevator === false) {
                this.increasePriceForFloor(this.application.floor);
            }
            if (!!this.application.elevator_to === false) {
                this.increasePriceForFloor(this.application.floor_to);
            }

            this.saveToStore();
        }, 250),

        /**
         * @see applicationElevatorTo
         */
        applicationElevatorTo: _.debounce(function (newElevator) {
            this.setPrice();
            if (!!this.application.elevator === false) {
                this.increasePriceForFloor(this.application.floor);
            }
            if (!!newElevator === false) {
                this.increasePriceForFloor(this.application.floor_to);
            }

            this.saveToStore();
        }, 250),

        /**
         * @param {number} newPayMethod
         * @see applicationPayMethod
         */
        applicationPayMethod: _.debounce(function (newPayMethod) {
            this.saveToStore();
        }, 500),
        /**
         * @param {string} newWorkerTotal
         * @see applicationWorkerTotal
         */
        applicationWorkerTotal: _.debounce(function (newWorkerTotal) {
            this.errors.worker_total = undefined;

            if (!this.isNormalInt(newWorkerTotal) || newWorkerTotal < 1 || newWorkerTotal > 30) {
                this.errors.worker_total = 'Неверное количество работников!';
            } else {
                this.saveToStore();
            }
        }, 500),
        /**
         * @param {number} newVal
         */
        applicationWhatToDo: _.debounce(function(newVal) {
            this.application.hardWork = isItHardWork(newVal);
            console.log(this.application.hardWork);

            this.application.price = this.application.hardWork ?
                Price.perHour.LOADER.hard :
                Price.perHour.LOADER.normal;

            this.application.price_for_worker =
                this.application.price -
                Price.perHour.OUR_FOR_LOADERS;

            this.saveToStore();
        }, 500),
    },

    data: function () {
        return {
            additionClientPhoneKey: 0,

            client_has_second_phone: undefined,

            calc: {
                'summ': true,
                'pays': false
            },
            cwaIsOpen: 0,   //parsed text area is open or not
            success: false,
            time_hours: '',
            time_minutes: '',
            action: 'create',

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
                address_to: '',
                date: '',
                time: '',
                driver_price: 0,
                price_for_driver: 0,
                price: 0,
                price_for_worker: 0,
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
                floor_to: 1,
                elevator: false,
                elevator_to: false,
                worker_count: 2,
                worker_total: 2,
                dispatcher_id: 0,
                hardWork: false,
            },

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

        setPrice() {
            console.log('setprice');
            this.application.price = this.application.hardWork ?
                Price.perHour.LOADER.hard :
                Price.perHour.LOADER.normal;

            this.application.price_for_worker =
                this.application.price -
                Price.perHour.OUR_FOR_LOADERS;
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

            this.$axios.post('/application/store_from_site', {
                service_type: this.application.service_type,
                category: MovingCategories[this.category].val,
                address: this.application.address,
                waypoints: JSON.stringify(this.application.waypoints),
                address_to: this.application.address_to,
                date: this.application.date,
                time: this.application.time,
                worker_total: this.application.worker_total,

                price: this.application.price,
                price_for_worker: this.application.price_for_worker,
                driver_price: this.application.driver_price,
                price_for_driver: this.application.price_for_driver,

                hourly_job: this.application.hourly_job,
                what_to_do: this.application.what_to_do,
                give_tools: this.application.give_tools,
                pay_method: this.application.pay_method,
                client_pay: this.application.client_pay,
                client_phone_number: this.application.client_phone_number,
                dispatcher_id: 0,
                floor: this.application.floor,
                floor_to: this.application.floor_to,
                elevator: this.application.elevator,
                elevator_to: this.application.elevator_to,
                android_app: 1,
                taxi_was_payed: 0,
            }).then(response => {
                console.log(response);
                if (response.status === 200) {
                    this.success = true;
                    this.application.id = response.data.id;
                    if (newAppStore.appExists) {
                        console.log('here');
                        historyStore.push(this.application);
                        newAppStore.clear();
                    } else {
                        console.log('there');
                        historyStore.update(0, this.application);
                        historyStore.delete(0);
                    }
                    phoneStore.save(this.application.client_phone_number);
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
            for (const [key, value] of Object.entries(app)) {
                if (value) {
                    this.application[key] = value;
                }
            }
            this.application.price_for_worker = this.application.price -
                Price.perHour.OUR_FOR_LOADERS;
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
    },

    props: {
        category: String,
    },

    created () {
         if (historyStore.getApp(0)) {
            /**
             *
             * @type {Application|null}
             */
            const app = historyStore.getApp(0);
            if (app && app.service_type === this.application.service_type) {
                this.saveAppValues(app);
                this.saveAppTime(app);

                this.appGotFromHistory = true;
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
                this.saveAppValues(app);
                this.saveAppTime(app);

                console.log('newAppStore');
                console.log(app);
            }
        }

        if (phoneStore.phoneExists) {
            this.application.client_phone_number = phoneStore.phone;
        }

        console.log('category ' + this.category);
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