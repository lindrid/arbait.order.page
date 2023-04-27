<template>
	<main>
    <div class="text-black-500 font-bold py-6 text-center">
      <span class="text-2xl"> {{ getLabel(category) }} </span>
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
            @click="formPage(category)"
            :label='labelNewApp'
          />

          <Pill
            class="textXl mb-10 text-center"
            @click="historyPage(category)"
            :label="labelRepeatApp"
          />

          <template v-for="(item, x) in actions" :key="x">
            <div
              class="
                mt-5 text-black-500 text-lg hover:text-yellow-500
                duration-300 text-center
              "
            >
              <i class="fa fa-chevron-right"></i>
              <span
                class="text-2xl mx-2 "
                @click="page(item.route, category)"
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

  const router = useRouter();
  const labelNewApp = "Новая заявка";
  const labelRepeatApp = "Повторить заявку"

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
    category : {
      type: String,
      default: 'default'
    }
  });

  // methods
  /**
   * @param {string} page
   * @param {string} category
   */
  const page = function (page, category) {
    let path = '/' + page + '/' + category;
    console.log(category);
    router.push({ path: path });
  }

  const formPage = category => {
    return page('form', category);
  }

  const historyPage = category => {
    return page('history', category);
  }

  const getLabel = function (category) {
    switch (category) {
      case 'loaders':
        return 'Услуга грузчиков';
      case 'delivery':
        return 'Переезд или доставка';
      case 'trash':
        return 'Вывоз мусора';
      case 'handyman':
        return 'Услуга разнорабочих';
      default :
        return 'Неизвестная услуга';
    }
  }
</script>

<style scoped>
  .textXl {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  }
  .myflex {
    display: flex;
    flex: 1;
  }
span {
  flex:1 0 auto;
}
</style>