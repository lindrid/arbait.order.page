<template>
	<main>
        <div class="text-black-500 font-bold py-6 text-center">
          <strong
              class="text-3xl"
              v-html="getLabel(service, category)"
          >
          </strong>
          <br>
          <strong class="text-2xl text-yellow-600"> Оформить заявку </strong>
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
                                getCategoryVal(service, category)
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
                    moving: {
                        val: 2,
                        label: 'Переезд или доставка'
                    },
                    trash: {
                        val: 3,
                        label: 'Вывоз и вынос мусора'
                    },
                },

                HANDYMAN_CATEGORIES: {
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

                MOVING_CATEGORIES: {
                    van: {
                        val: 0,
                        label: 'Переезд <br> Микроавтобус'
                    },
                    flatbed: {
                        val: 1,
                        label: 'Переезд <br> Бортовой грузовик'
                    },
                    lorry2: {
                        val: 2,
                        label: 'Переезд: будка до 2т <br> (1.9м / 2м / 3м)'
                    },
                    lorry3: {
                        val: 3,
                        label: 'Переезд: будка от 2 до 3т <br> (2.1м / 2м / 4м)'
                    },
                    lorry4: {
                        val: 4,
                        label: 'Переезд: будка более 4т'
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
             * @param {string} service
             * @param {string|null} category
             * @return {string|null}
             */
            getCategoryVal: function (service, category) {
                if (category === null)
                    return null;
                if (service === 'handyman') {
                    return this.HANDYMAN_CATEGORIES[category].val;
                }
                return this.MOVING_CATEGORIES[category].val;
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
                    if (service === 'handyman') {
                        return this.HANDYMAN_CATEGORIES[category].label;
                    }
                    return this.MOVING_CATEGORIES[category].label;
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
                if (service === 'moving') {
                    return this.router.push({
                        name: 'MovingCategories'
                    });
                }

                this.router.push({
                    path: path,
                });
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