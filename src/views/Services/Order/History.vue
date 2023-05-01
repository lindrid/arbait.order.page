<template>
  <div class="text-black-500 font-bold py-6 text-center">
    <span class="text-2xl">
      {{ title }}
    </span>
  </div>

  <BackBtn class="mx-5" />

    <span v-for="app in
        store.applications (
            getServiceVal(service),
            getCategoryVal(category)
        )
    ">
        <div
            class=" mt-5 text-black-500 text-lg hover:text-yellow-500
                    duration-300 text-center "
            @click="formPage(app, service, category)"
        >
            {{ app.date + '&nbsp ' + app.time + ', ' + app.address + ', ' + app.worker_total }} чел
        </div>
    </span>
</template>

<script setup>
import BackBtn from '@/components/Buttons/Back.vue'

const title = 'История заявок';

const props = defineProps({
    service : {
        type: String,
        default: 'loaders'
    },
    category : {
        type: String,
        default: null
    }
});
</script>

<script>
    import { useAppHistory } from '@/stores/app/history';
    import router from '@/router';

    export default {
        data: function () {
            return {
                store: useAppHistory(),

                SERVICES: {
                    loader:  0,
                    handyman: 1,
                    delivery: 2,
                    trash: 3,
                },

                CATEGORIES: {
                    digger: 0,
                    plasterer: 1,
                    decorator: 2,
                    other: 3,
                },
            }
        },

        methods: {
            /**
             *
             * @param {string} service
             * @return {number}
             */
            getServiceVal(service) {
                console.log('service:'+service);
                return this.SERVICES[service];
            },
            /**
             *
             * @param {string|null} category
             * @return {number|null}
             */
            getCategoryVal(category) {
                console.log('category:'+category);
                if (category === null)
                    return null;
                return this.CATEGORIES[category];
            },
            /**
             * @param {string} page
             * @param {string} service
             * @param {string|null} category
             * @param {number} appId
             */
            page: function (page, service, category, appId) {
                let path = '/' + page ;
                console.log(appId);

                if (category === null) {
                    path += '/' + service;
                } else {
                    path += '/handyman/' + category;
                }

                this.router.push({
                    path: path + '/' + appId,
                });
            },

            /**
             * @param {Application} app
             * @param {string} service
             * @param {string|null} category
             */
            formPage: function (app, service, category) {
                this.page('form', service, category, app.id);
            },
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