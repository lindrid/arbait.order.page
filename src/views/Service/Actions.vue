<template>
	<main>
    <div class="text-black-500 font-bold py-6 text-center">
        <span class="text-2xl"> {{ label }} </span>
    </div>

    <section class="px-4">
      <BackBtn class="mx-5" />

      <span>
        <div class="flex flex-wrap mt-16 flex items-center justify-center 3xl:px-[200px] 2xl:px-[150px] px-[50px]">

          <Pill
                  class="textXl mb-10 text-center"
                  @click="movePage('Blank')"
                  :label="pillLabel"
          />

          <template v-for="(item, x) in actions" :key="x">
            <div
                    class="mt-5 text-black-500 text-lg hover:text-yellow-500 duration-300 text-center"
            >
              <i class="fa fa-chevron-right"></i>
              <span
                      class="text-2xl mx-2 "
                      @click="movePage(item.route)"
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
  import BackBtn from '@/components/BackBtn.vue'
  import { useRouter } from 'vue-router'
  import Pill from '@/components/Pill.vue'

  const router = useRouter();
  const pillLabel = "Оформить заявку";

  const actions = [
    {
      name: "Информация",
      route: 'Blank'
    },
    {
      name: "Расчитать цену за услугу",
      route: 'Blank'
    },
  ];

  const props = defineProps({
    label: {
      type: String,
      default: 'Label'
    },
    category : {
      type: String,
      default: 'default'
    }
  })

  // methods
  const movePage = function (category) {
    let route;
    switch (category) {
      case 'loaders':
        route = 'FormLoaders';
        break;
      case 'delivery':
        route = 'FormLoaders';
        break;
      case 'trash':
        route = 'FormLoaders';
        break;
      case 'handyman':
        route = 'FormLoaders';
        break;
      default :
        route = 'Blank';
        break;
    }
    router.push({ name: route });
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