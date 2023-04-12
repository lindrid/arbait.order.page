<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
        <form @submit.prevent="saveForm()">
          <div class="row col-xs-12 form-group">
            <button class="col-xs-5 col-md-1"
                    @click="clearFields">Стереть</button>
          </div>

          <div class="row">
            <div class="col-xs-12 form-group">
              <input
                  id="address"
                  ref="addr"
                  type="text"
                  v-model="application.address"
                  class="form-control"
                  placeholder="Адрес"
                  required
              >
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Дата</label>
              <input id="date"
                     type="text"
                     v-model="application.date"
                     @focus="selectDay()"
                     style="width: 120px;"
              >
              <span class="help-block" v-if="dateError">{{ dateError }}</span>
            </div>
          </div>

          <div class="row mytime">
            <div class="col-xs-12 form-group">
              <label class="control-label">Время</label>
              <input id="time_hours"
                     type="text"
                     ref="th"
                     v-model="time_hours"
                     @focus="$event.target.select()"
                     style="width: 70px;"
              >

              <b> : </b>
              <input id="time_minutes"
                     ref="tm"
                     type="text"
                     v-model="time_minutes"
                     @focus="$event.target.select()"
                     style="width: 70px;"
              >
              <span class="help-block" v-if="timeHoursError">{{ timeHoursError }}</span>
              <span class="help-block" v-if="timeMinutesError">{{ timeMinutesError }}</span>
            </div>
          </div>


          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Количество: человек / часов</label><br>
              <input
                  style="width: 60px;"
                  id="worker_total"
                  type="text"
                  v-model="application.worker_total"
                  @click="$event.target.select()"
              >
              <b> &nbsp; / &nbsp; </b>
              <input
                  style="width: 60px;"
                  id="work_hours"
                  type="text"
                  v-show="application.hourly_job"
                  v-model="application.work_hours[application.hourly_job]"
                  @click="$event.target.select()"
              >
              <span class="help-block" v-if="workerTotalError">{{ workerTotalError }}</span>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 form-group">

              <label class="control-label">Оплата: от клиента / грузчикам</label><br>

              <button
                  class="btn btn-default"
                  v-on:click.stop.prevent="calcSummTotal();"
              >
                <i  class="glyphicon glyphicon-arrow-down"></i>
              </button>

              <input
                  id="price"
                  ref="price"
                  type="text"
                  v-model="application.price[application.hourly_job]"
                  style="width: 60px;"
                  @click="$event.target.select()"
              >

              <b> &nbsp; / &nbsp; </b>

              <input
                  id="price_for_worker"
                  type="text"
                  v-model="application.price_for_worker[application.hourly_job]"
                  style="width: 60px;"
                  @click="$event.target.select()"
              >

              <span class="help-block" v-if="priceError">{{ priceError }}</span>
              <span class="help-block" v-if="priceForWorkerError">{{ priceForWorkerError }}</span>

            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Доход / расход / прибыль</label><br>

              <button
                  class="btn btn-default"
                  v-on:click.stop.prevent="calcPayValues()"
              >
                <i  class="glyphicon glyphicon-arrow-up"></i>
              </button>

              <input
                  id = "summ_total"
                  ref="summ_total"
                  type="text"
                  v-model="application.summ_total[application.hourly_job]"
                  style="width: 80px;"
              >


              <b> &nbsp; / &nbsp; </b>

              <input
                  id = "summ_w_total"
                  type="text"
                  v-model="application.summ_w_total[application.hourly_job]"
                  style="width: 80px;"
              >

              <b> &nbsp; / &nbsp; </b>

              <input
                  id = "profit"
                  type="text"
                  v-bind:value="application.summ_total[application.hourly_job] -
                                        application.summ_w_total[application.hourly_job]"
                  style="width: 80px;"
              >
              <span class="help-block" v-if="error && errors.summ_total">{{ errors.summ_total }}</span>
              <span class="help-block" v-if="error && errors.summ_w_total">{{ errors.summ_w_total }}</span>
            </div>
          </div>


          <div class="row">
            <div class="col-xs-12 form-group">
              <radio name="rbtn_per_hour_or_piece_rate"
                     v-bind:value="1" v-model="application.hourly_job"
              >
                В час
              </radio>
              <radio name="rbtn_per_hour_or_piece_rate"
                     v-bind:value="0" v-model="application.hourly_job"
              >
                Сдельно
              </radio>
            </div>
          </div>


          <div class="row">
            <div class="col-xs-12 form-group">
                            <textarea id="text"
                                      v-model="application.what_to_do"
                                      class="form-control form-group"
                                      placeholder="Что делать?"
                                      required>
                            </textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 form-group">
              <radio name="rbtn_pay_method"
                     checked
                     v-bind:value="PAY_METHOD_CARD" v-model="application.pay_method"
              >
                Карта
              </radio>
              <radio name="rbtn_pay_method"
                     v-bind:value="PAY_METHOD_CASH" v-model="application.pay_method"
              >
                Наличка
              </radio>
              <radio name="rbtn_pay_method"
                     v-bind:value="PAY_METHOD_ACCOUNT" v-model="application.pay_method"
              >
                Расчетный счет
              </radio>
            </div>
          </div>

          <div v-if="application.android_app" class="row">
            <div class="col-xs-12 form-group">
              <radio name="rbtn_pay_from"
                     :checked="action !== 'edit' && application.pay_method === PAY_METHOD_CARD"
                     v-bind:value="0" v-model="application.client_pay"
              >
                От диспетчера
              </radio>
              <radio name="rbtn_pay_from"
                     :checked="action !== 'edit' && application.pay_method === PAY_METHOD_CASH"
                     v-bind:value="1" v-model="application.client_pay"
              >
                От клиента
              </radio>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 form-group">
              <checkbox name="terms" v-model="application.taxi_was_payed">
                Такси (пометка)
              </checkbox>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 form-group">
              <checkbox name="terms" v-model="application.android_app">
                Приложение
              </checkbox>
            </div>
          </div>

          <div class="form-group" v-bind:class="{ 'has-error': error && errors.client_phone_number }">
            <label for="client_phone_number">Телефон клиента</label>
            <div>

                            <span class="input-group">
                                 <input
                                     id = "client_phone_number"
                                     type="tel"
                                     v-model="application.client_phone_number"
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
                            </span>
              <input v-if="client_has_second_phone"
                     id = "addl_client_phone_number"
                     type="tel"
                     v-model="application.addl_client_phone_number"
              >
            </div>
            <span class="help-block" id="client_phone_number_help_block"
                  v-if="error && errors.client_phone_number">{{ errors.client_phone_number }}
                        </span>
          </div>

          <div class="row">
            <div class="col-xs-3 col-md-1 form-group">
              <button class="btn btn-success" type="submit">Сохранить</button>
            </div>
            <div class="col-xs-3 col-md-1 form-group">
              <div v-if="this.application.android_app">
                <router-link to="/apps/android/1" class="btn btn-default">Назад</router-link>
              </div>
              <div v-else>
                <router-link to="/apps" class="btn btn-default">Назад</router-link>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
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

      PRICE_PIECE_RATE: 2800,
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
        taxi_was_payed: false
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
            taxi_was_payed: this.application.taxi_was_payed
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
    this.$refs.addr.focus();
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