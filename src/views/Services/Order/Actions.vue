<template>
	<main>
        <div class="text-black-500 font-bold py-6 text-center">
          <span class="text-2xl"> {{ getLabel(service, category) }} </span>
          <br>
          <span class="text-xl text-yellow-500"> Оформить заявку </span>
        </div>

        <section class="px-4">
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

                    <Pill
                        v-if="
                            store.count(
                                getServiceVal(service),
                                getCategoryVal(category)
                            ) > 0
                        "
                        class="textXl mb-10 text-center"
                        @click="historyPage(service, category)"
                        :label="labelRepeatApp"
                    />

                    <template v-for="(item, x) in actions" :key="x">
                        <div
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
                        </div>
                    </template>
                </div>
            </span>
        </section>
	</main>
</template>

<script setup>
    import BackBtn from '@/components/Buttons/Back.vue'
    import Pill from '@/components/Pill.vue'

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

    export default {
        data: function() {
            return {
                SERVICES: {
                    loader: {
                        val: 0,
                        label: 'Услуга грузчиков'
                    },
                    handyman: {
                        val: 1,
                        label: 'Услуга разнорабочих'
                    },
                    delivery: {
                        val: 2,
                        label: 'Переезд или доставка'
                    },
                    trash: {
                        val: 3,
                        label: 'Вывоз и вынос мусора'
                    },
                },

                CATEGORIES: {
                    digger: {
                        val: 0,
                        label: 'Услуга землекопов'
                    },
                    plasterer: {
                        val: 1,
                        label: 'Услуга штукатурщиков'
                    },
                    decorator: {
                        val: 2,
                        label: 'Услуга маляров'
                    },
                    other: {
                        val: 3,
                        label: 'Услуга разнорабочих'
                    },
                },

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
                        route: 'calc'
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
                return this.SERVICES[service].val;
            },
            /**
             * @param {string|null} category
             * @return {string|null}
             */
            getCategoryVal: function (category) {
                if (category === null)
                    return null;
                return this.CATEGORIES[category].val;
            },
            /**
             * @param {string} service
             * @param {string|null} category
             * @return {string}
             */
            getLabel: function (service, category) {
                if (category === null) {
                    return this.SERVICES[service].label;
                } else {
                    return this.CATEGORIES[category].label;
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
                this.router.push({path: path});
            },

            formPage: function (service, category) {
                return this.page('form', service, category);
            },

            historyPage: function (service, category) {
                return this.page('history', service, category);
            },
        },
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