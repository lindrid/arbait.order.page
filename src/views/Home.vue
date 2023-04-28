<template>
	<main>
		<section class="section">
			<strong class="text-3xl ml-5">
				<span class="text-yellow-500 flex items-center justify-center">
					Арбайт.грузчики
				</span>
        <span class="flex items-center justify-center">
          и грузоперевозки
        </span>
			</strong>

      <span>
        <div class="flex flex-wrap gap-6 mt-10 flex items-center justify-center 2xl:px-[300px] px-[50px]">
          <template v-for="(item, x) in services" :key="x">
            <Pill
                class="textXl text-center"
                @click="movePage(item.route, item.name, item.category)"
                :label="item.name"
            />
          </template>
        </div>
      </span>
		</section>

		<Footer />
	</main>
</template>

<script setup>
	import { useRouter } from 'vue-router'

  import { useAppHistory } from '@/stores/app/history'
  import Pill from '@/components/Pill.vue'
	import Footer from '@/components/Footer.vue'
	
	const router = useRouter()
  const store = useAppHistory();

	const movePage = (to, label, category) => router.push({
    name: to,
    params: {
      category: category
    }
  });
	
	const services = [
    {
      name: "Услуга грузчиков",
      route: 'ServiceActions',
      category: 'loaders'
    },
    {
      name: "Переезд или доставка",
      route: 'ServiceActions',
      category: 'delivery'
    },
    {
      name: "Вывоз и вынос мусора",
      route: 'ServiceActions',
      category: 'trash'
    },
    {
      name: "Услуга разнорабочих",
      route: 'ServiceActions',
      category: 'handyman'
    },
	]
</script>

<style scoped>
	.section {
		@apply w-full bg-gray-50 py-8 px-5 rounded mb-8;
	}

	.textXl {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  }

    span {
      flex:1 0 auto;
    }
</style>
