<template>
	<main>
        <section class="section">
            <Header/>

            <div class="text-black-500 font-bold py-6 text-center">
                <strong
                    class="text-3xl"
                    v-html="getLabel(service, category)"
                >
                </strong>
                <br>
                <strong class="text-2xl text-yellow-600"> Оформить заявку </strong>
            </div>

            <BackBtn class="mx-5" />

            <span>
                <div class="
                  flex flex-wrap mt-16 flex items-center justify-center
                  3xl:px-[300px] 2xl:px-[150px] px-[50px]"
                >
                    <Pill
                        class="textXl mb-5 text-center"
                        @click="formPage(service, category)"
                        :label='labelNewApp'
                    />
                </div>

                <div class="
                  flex flex-wrap flex items-center justify-center
                  3xl:px-[300px] 2xl:px-[150px] px-[50px]"
                >
                    <Pill
                        v-if="
                            store.count(
                                getServiceVal(service),
                                getCategoryVal(service, category)
                            ) > 0
                        "
                        class="textXl mb-10 text-center"
                        @click="historyPage(service, category)"
                        :label="labelRepeatApp"
                    />
                </div>


                    <template v-for="(item, x) in actions" :key="x">
                        <div class="
                            flex flex-wrap flex items-center justify-center
                            3xl:px-[300px] 2xl:px-[150px] px-[50px]"
                        >
                            <span
                                class="
                                    mt-5 text-black-500 text-lg hover:text-yellow-500
                                    duration-300 text-center
                                "
                            >
                                <i class="fa fa-chevron-right">
                                </i>
                                <span
                                    class="text-2xl mx-2"
                                    @click="page(item.route, service, category)"
                                >
                                    {{ item.name }}
                                </span>
                            </span>
                        </div>
                    </template>
            </span>
            <Footer class="mt-10"/>
        </section>
	</main>
</template>

<script setup>
    import BackBtn from '@/components/Buttons/Back.vue'
    import Pill from '@/components/Pill.vue'

    import { ServiceTypes } from "@/consts/service_type";
    import { HandymanCategories } from "@/consts/categories/handyman";
    import { MovingCategories } from "@/consts/categories/moving";
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";

    const props = defineProps({
        service : {
            type: String,
            default: 'loader'
        },
        category : {
            type: String,
            default: null
        }
    });
</script>

<script>
    import {useRouter} from "vue-router";
    import {useAppHistory} from "@/stores/app/history";
    import {MovingCategories} from "@/consts/categories/moving";
    import {ServiceTypes} from "@/consts/service_type";
    import {HandymanCategories} from "@/consts/categories/handyman";

    export default {
        data: function() {
            return {
                router: useRouter(),
                store: useAppHistory(),

                labelNewApp: "Новая заявка",
                labelRepeatApp: "Повторить заявку",

                actions: [
                    {
                        name: "Информация",
                        route: 'info'
                    },
                    {
                        name: "Расчитать цену за услугу",
                        route: 'blank'
                    },
                ],
            }
        },
        methods: {
            /**
             *
             * @param {string} service
             * @return {number}
             */
            getServiceVal: function (service) {
                return ServiceTypes[service].val;
            },
            /**
             * @param {string} service
             * @param {string|null} category
             * @return {number|null}
             */
            getCategoryVal: function (service, category) {
                if (category === null)
                    return null;
                if (service === 'handyman') {
                    return HandymanCategories[category].val;
                }
                return MovingCategories[category].val;
            },
            /**
             * @param {string} service
             * @param {string|null} category
             * @return {string}
             */
            getLabel: function (service, category) {
                if (category === null) {
                    return ServiceTypes[service].label;
                } else {
                    if (service === 'handyman') {
                        return HandymanCategories[category].name;
                    }
                    return MovingCategories[category].name;
                }
            },
            /**
             * @param {string} page
             * @param {string} service
             * @param {string|null} category
             */
            page: function (page, service, category) {
                let path = '/' + page + '/' + service;

                if (service === 'handyman') {
                    if (category !== null) {
                        path += '/' + category;
                    }
                }

                if (page === 'form' && (service === 'moving' || service === 'trash')) {
                    path = '/categories/' + service;
                }

                this.router.push({ path: path });
            },

            formPage: function (service, category) {
                return this.page('form', service, category);
            },

            historyPage: function (service, category) {
                return this.page('history', service, category);
            },
        },

        created() {
            console.log('created!');
        }
    }
</script>

<style scoped>
    .textXl {
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
    }

    span {
        flex:1 0 auto;
    }
</style>