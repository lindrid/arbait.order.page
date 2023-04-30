<template>
	<main>
        <div class="text-black-500 font-bold py-6 text-center">
          <span class="text-2xl"> {{ getLabel(service) }} </span>
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
                        @click="formPage(service)"
                        :label='labelNewApp'
                    />

                    <Pill
                        v-if="store.count(getServiceType(service), category) > 0"
                        class="textXl mb-10 text-center"
                        @click="historyPage(service)"
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
                                @click="page(item.route, service)"
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
    import { useRouter } from 'vue-router'
    import Pill from '@/components/Pill.vue'
    import { useAppHistory } from '@/stores/app/history';

    const router = useRouter();
    const store = useAppHistory();

    const labelNewApp = "Новая заявка";
    const labelRepeatApp = "Повторить заявку";

    const LOADER_SERVICE_TYPE = 0;
    const HANDYMAN_SERVICE_TYPE = 1;
    const DELIVERY_SERVICE_TYPE = 2;
    const TRASH_SERVICE_TYPE = 3;

    const HANDYMAN_DIGGER_CATEGORY = 0;
    const HANDYMAN_PLASTERER_CATEGORY = 1;
    const HANDYMAN_DECORATOR_CATEGORY = 2;
    const HANDYMAN_OTHER_CATEGORY = 3;

    const actions = [
        {
          name: "Информация",
          route: 'info'
        },
        {
          name: "Расчитать цену за услугу",
          route: 'calc'
        },
    ];

    const props = defineProps({
        service : {
          type: String,
          default: 'default'
        },
        category : {
            type: Number,
            default: null
        }
    });

  // methods
  /**
   * @param {string} page
   * @param {string} service
   */
    const page = function (page, service) {
        let path = '/' + page + '/' + service;
        console.log(service);
        router.push({ path: path });
    }

    const formPage = service => {
        return page('form', service);
    }

    const historyPage = service => {
        return page('history', service);
    }

    const getLabel = function (service, category) {
        switch (service) {
            case 'loaders':
                return 'Услуга грузчиков';
            case 'delivery':
                return 'Переезд или доставка';
            case 'trash':
                return 'Вывоз и вынос мусора';
            case 'handyman':
                switch (category) {
                    case HANDYMAN_DIGGER_CATEGORY:
                        return 'Услуга землекопов';
                    case HANDYMAN_PLASTERER_CATEGORY:
                        return 'Услуга штукатурщиков';
                    case HANDYMAN_DECORATOR_CATEGORY:
                        return 'Услуга маляров';
                    case HANDYMAN_OTHER_CATEGORY:
                        return 'Услуга разнорабочих';
                }
                return 'Услуга разнорабочих';
            default :
                return 'Неизвестная услуга';
        }
    }

    /**
     *
     * @param service
     * @return {number}
     */
    const getServiceType = function (service) {
        switch (service) {
            case 'loaders':
                return LOADER_SERVICE_TYPE;
            case 'handyman':
                return HANDYMAN_SERVICE_TYPE;
            case 'delivery':
                return DELIVERY_SERVICE_TYPE;
            case 'trash':
                return TRASH_SERVICE_TYPE;
            default :
                return -1;
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