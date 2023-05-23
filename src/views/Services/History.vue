<template>
    <section class="section">
        <Header/>

        <div class="text-black-500 font-bold py-6 text-center">
            <span class="text-2xl">
              {{ title }}
            </span>
        </div>

        <BackBtn class="mx-5" />

        <span
            v-for="app in store.applications(
                ServiceTypes[service].val,
                getCategoryVal(service, category)
            )"
        >
            <div v-if="app.address_to"
                class=" mt-5 text-black-500 text-lg hover:text-yellow-500
                        duration-300 text-center "
                @click="categoriesPage(app, service)"
            >
                {{
                    app.date + '&nbsp '
                    + app.time + ', '
                    + app.address + ' -> '
                    + app.address_to + ', '
                    + app.worker_total
                }} чел
            </div>
            <div v-else
                class=" mt-5 text-black-500 text-lg hover:text-yellow-500
                        duration-300 text-center "
                @click="formPage(app, service, category)"
            >
                {{
                    app.date + '&nbsp '
                    + app.time + ', '
                    + app.address + ', '
                    + app.worker_total
                }} чел
            </div>
        </span>
    </section>
</template>

<script setup>
import BackBtn from '@/components/Buttons/Back.vue'

import { ServiceTypes } from "@/consts/service_type";
import { MovingCategories } from "@/consts/categories/moving";
import { HandymanCategories } from "@/consts/categories/handyman";
import Header from "@/components/Header.vue";

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
    import {HandymanCategories} from "@/consts/categories/handyman";
    import {MovingCategories} from "@/consts/categories/moving";

    export default {
        data: function () {
            return {
                store: useAppHistory(),
            }
        },

        methods: {
            /**
             *
             * @param service
             * @param {string|null} category
             * @return {number|null}
             */
            getCategoryVal(service, category) {
                console.log('category:'+category);
                if (category === null)
                    return null;
                return service === 'handyman' ?
                    HandymanCategories[category].val :
                    MovingCategories[category].val;
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

                console.log(path);
                router.push({
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
            /**
             * @param {Application} app
             * @param {string} service
             */
            categoriesPage: function (app, service) {
                this.page('categories', service, null, app.id);
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