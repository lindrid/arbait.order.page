<template>
  <form @submit.prevent="saveForm()">
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
                  id="floor"
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
            <label for="taxi"
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
                  v-model="application.taxi_was_payed"
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
              Сохранить
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

export default {

  computed: {
    applicationDate() {
      return this.application.date;
    },
    applicationWorkerTotal() {
      return this.application.worker_total;
    },
    applicationPrice() {
      return this.application.price[this.application.hourly_job];
    },
    applicationPriceForWorker() {
      return this.application.price_for_worker[this.application.hourly_job];
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

  data: function () {
    return {
      additionClientPhoneKey: 0,

      PAY_METHOD_CARD: 1,
      PAY_METHOD_CASH: 2,
      PAY_METHOD_ACCOUNT: 3,

      PRICE_PIECE_RATE: 2700,
      PRICE_PER_HOUR: 375,
      PRICE_PR_FOR_WORKER: 2300,
      PRICE_PH_FOR_WORKER: 300,

      client_has_second_phone: undefined,

      application: {
        id:0,
        what_to_do: '',
        address: '',
        date: '',
        time: '',
        price: {0: 2800, 1: 375},
        price_for_worker: {0: 2300, 1: 300},
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
        work_hours: {0: 1, 1: 2},
        summ_total: {0: 4800, 1: 750},
        summ_w_total: {0: 3800, 1: 600},
        dispatcher_id: 0,
        taxi_was_payed: false,
        floor: 1,
        elevator: false
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

  watch: {
    // whenever time_hours changes, this function will run
    /**
     * @param {number} newHours
     */
    time_hours: function (newHours) {
      this.errors.time_hours = undefined;

      if (newHours < 0 || newHours > 24) {
        this.error = true;
        this.errors.time_hours = 'Неверное количество часов';
      }

      _.debounce(this.time_hours, 500, {});
    },

    /**
     * @param {number} newMinutes
     */
    time_minutes: function (newMinutes) {
      this.errors.time_minutes = undefined;

      if (newMinutes < 0 || newMinutes > 60) {
        this.error = true;
        this.errors.time_minutes = 'Неверное количество минут';
      }

      _.debounce(this.time_minutes, 500, {});
    },

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
     * @see applicationPrice
     */
    applicationPrice: function (newPrice) {
      this.errors.price = undefined;

      if (newPrice <= 0) {
        this.errors.price = 'Неверная цена!';
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
      }
    },
  },

  methods: {
    /**
     * @param {string} str
     */
    isNormalInt: function (str) {
      return /^\+?(0|[1-9]\d*)$/.test(str);
    },

    forceRerender() {
      this.additionClientPhoneKey += 1;
    },

    clearFields: function ()
    {
      var a = this.application;
      this.application = {
        id: a.id,
        what_to_do: '',
        address: '',
        date: this.application.date,
        time: '',
        price: a.price[a.hourly_job],
        price_for_worker: a.price_for_worker[a.hourly_job],
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
        work_hours: a.work_hours[a.hourly_job],
        summ_total: a.summ_total[a.hourly_job],
        summ_w_total: a.summ_w_total[a.hourly_job],
        dispatcher_id: this.dispatcher_id,
        taxi_was_payed: false
      }
    },

    calcSummTotal: function ()
    {
      var hj = this.application.hourly_job;
      var app = this.application;
      var h = app.work_hours[hj];
      var wt = app.worker_total;


      this.$set(app.summ_total, hj, app.price[hj] * h * wt);

      //app.summ_total[hj] = app.price[hj] * h * wt;
      app.summ_w_total[hj] = app.price_for_worker[hj] * h * wt;

      console.log(app.summ_total[hj]);
      document.getElementById("summ_total").scrollIntoView({block: "center", behavior: "smooth"});
    },

    calcPayValues: function ()
    {
      var hj = this.application.hourly_job;
      var app = this.application;
      var h = app.work_hours[hj];
      var wt = app.worker_total;

      app.price[hj] = (app.summ_total[hj]) / (h * wt);
      app.price_for_worker[hj] = (app.summ_w_total[hj]) / (h * wt);
      document.getElementById("price").scrollIntoView({block: "center", behavior: "smooth"});
    },

    curday: function (sp) {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //As January is 0.
      var yyyy = today.getFullYear();

      if(dd<10) dd='0'+dd;
      if(mm<10) mm='0'+mm;
      return (yyyy+sp+mm+sp+dd);
    },

    saveForm() {
      this.application.time = this.time_hours + ':' + this.time_minutes;

      let uri = '/application/store';
      if (this.action === 'edit') {
        uri = '/application/update/' + this.application.id;
      }

      const date = this.application.date.split("-");
      if (!this.isValidDate(date[0], date[1], date[2])) {
        document.getElementById("date").scrollIntoView({block: "center", behavior: "smooth"});
        return;
      }

      if (this.time_hours < 0 || this.time_hours > 24) {
        document.getElementById("time_hours").scrollIntoView({block: "center", behavior: "smooth"});
        return;
      }

      if (this.time_minutes < 0 || this.time_minutes > 60) {
        document.getElementById("time_minutes").scrollIntoView({block: "center", behavior: "smooth"});
        return;
      }

      const addl_client_phone_number = this.client_has_second_phone?
          this.application.addl_client_phone_number : null;

      const app = this;

      this.$axios.post(uri,
          {
            address: this.application.address,
            date: this.application.date,
            time: this.application.time,
            worker_total: this.application.worker_total,
            price: this.application.price[this.application.hourly_job],
            price_for_worker: this.application.price_for_worker[this.application.hourly_job],
            hourly_job: this.application.hourly_job,
            what_to_do: this.application.what_to_do,
            edg: this.application.edg,
            pay_method: this.application.pay_method,
            client_pay: this.application.client_pay,
            client_phone_number: this.application.client_phone_number,
            addl_client_phone_number: addl_client_phone_number,
            dispatcher_id: this.application.dispatcher_id,
            android_app: this.application.android_app,
            taxi_was_payed: this.application.taxi_was_payed,
            floor: this.application.floor,
            elevator: this.application.elevator
          }
      ).then(response => {
        console.log(response);
        if (response.status == 200) {
          //this.day_income = response.data.day_income;
          this.success = true;
          var name = '';
          localStorage.removeItem('dispatcher_id');
          localStorage.removeItem('address');
          localStorage.removeItem('date');
          localStorage.removeItem('time_hours');
          localStorage.removeItem('time_minutes');
          localStorage.removeItem('what_to_do');
          localStorage.removeItem('price');
          localStorage.removeItem('price_for_worker');
          localStorage.removeItem('hourly_job');
          localStorage.removeItem('pay_method');
          localStorage.removeItem('client_pay');
          localStorage.removeItem('client_phone_number');
          localStorage.removeItem('addl_client_phone_number');
          localStorage.removeItem('worker_count');
          localStorage.removeItem('worker_total');
          localStorage.removeItem('android_app');

          if (this.application.android_app) {
            this.$router.push({
              name: 'android_applications_with_page',
              params: {page: 1}
            });
          }
          else {
            this.$router.push({name: 'applications'});
          }
        }
        else {
          // а тут что?
        }

      }).catch(function (error) {
        /*var words = error.toString().split(' ');
        var errorStatus = words[words.length - 1];
        if (errorStatus == '401') {
          alert("Вы должны залогиниться!");
          app.$router.push({name: 'login'});
        }
        app.error = true;
        //console.log(error.response.data);
        app.errors = error.response.data.errors;
        console.log(error);
        if (typeof app.errors.income !== 'undefined') {
          document.getElementById("income").scrollIntoView({block: "center", behavior: "smooth"});
        }
        if (typeof app.errors.outcome !== 'undefined') {
          document.getElementById("outcome").scrollIntoView({block: "center", behavior: "smooth"});
        }
        if (typeof app.errors.what_to_do !== 'undefined') {
          document.getElementById("what_to_do").scrollIntoView({block: "center", behavior: "smooth"});
        }*/
        console.log(error);
      });
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

    selectDay() {
      var input = document.getElementById("date");
      var s = input.value;
      if (s.length) {
        window.setTimeout(function() {
          input.setSelectionRange(s.length-2, s.length);
        }, 0);
      }
    },

    addClientPhone() {
      this.client_has_second_phone = true;
    },

    removeClientPhone() {
      this.client_has_second_phone = false;
    },
  },

  mounted () {
    const input = this.$refs.price;

    //var dispatcher_name = this.$route.params.dispatcher_name;
    const self = this;
    const path = this.$route.path.split("/");
    this.action = path[2];

    this.application.dispatcher_id = this.$route.params.user_id;
    var appType = this.$route.params.type;
    this.application.android_app = (appType == 'android')? 1 : 0;

    if (this.action == 'edit') {
      this.$axios.get('/application/edit/' + self.$route.params.id)
          .then(function (resp) {
            self.application = resp.data.application;
            console.log(self.application);
            // не реактивное свойство work_hours
            self.application.work_hours = {0: 1, 1:2};

            if (self.application.hourly_job) {
              // нельзя использовать просто =
              // т.к. новое поле объекта не будет реактивным.
              // чтобы оно было реактивным, нужно использовать $set

              self.$set(self.application, 'summ_total', {
                0 : self.PRICE_PIECE_RATE * self.application.worker_total,
                1 : self.application.price * self.application.worker_total * 2});

              self.$set(self.application, 'summ_w_total', {
                0 : self.PRICE_PR_FOR_WORKER * self.application.worker_total,
                1 : self.application.price_for_worker * self.application.worker_total * 2});

              self.$set(self.application, 'price', {
                0: self.PRICE_PIECE_RATE,
                1: self.application.price
              });

              self.$set(self.application, 'price_for_worker', {
                0: self.PRICE_PR_FOR_WORKER,
                1: self.application.price_for_worker
              });
            }
            else {
              self.$set(self.application, 'summ_total', {
                0 : self.application.price * self.application.worker_total,
                1 : self.PRICE_PER_HOUR * self.application.worker_total * 2});

              self.$set(self.application, 'summ_w_total', {
                0 : self.application.price_for_worker * self.application.worker_total,
                1 : self.PRICE_PH_FOR_WORKER * self.application.worker_total * 2});

              self.$set(self.application, 'price', {
                0: self.application.price,
                1: self.PRICE_PER_HOUR
              });

              self.$set(self.application, 'price_for_worker', {
                0: self.application.price_for_worker,
                1: self.PRICE_PH_FOR_WORKER
              });
            }

            var arr = self.application.time.split(':');
            self.time_hours = arr[0];
            self.time_minutes = arr[1];

            if (self.application.addl_client_phone_number) {
              self.clientHasSecondPhone = true;
            }

            console.log(self.application);
          })
          .catch(function (error) {
            var words = error.toString().split(' ');
            var errorStatus = words[words.length - 1];
            if (errorStatus == '401') {
              alert("Вы должны залогиниться!");
              self.$router.push({name: 'login'});
            }
          });
    }

    this.application.date = this.curday('-');
  },
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