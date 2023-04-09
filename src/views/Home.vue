<template>
	<main>
		<section class="section">
			<strong class="text-3xl ml-5">
				<span class="text-yellow-500 flex items-center justify-center">
					Арбайт.грузчики
				</span>
        <span class="flex items-center justify-center"> и грузоперевозки</span>
			</strong>
      <div class="flex flex-wrap gap-4 mt-10  flex items-center justify-center">
        <template v-for="(item, x) in dependencies" :key="x">
          <Pill class="text-xl" :label="item" />
        </template>
      </div>
		</section>

		<Footer />
	</main>
</template>

<script setup>
	import { useCount } from '@/stores/counter'
	import { useRouter } from 'vue-router'
	import Pill from '@/components/Pill.vue'
	import Footer from '@/components/Footer.vue'
	
	const count = useCount()
	const router = useRouter()

	const movePage = to => router.push({ name: to })
	
	const dependencies = [
		"Услуга грузчиков",
    "Переезд или доставка",
		"Вывоз мусора",
    "Услуга разнорабочих",
	]

	const routes = [
		{
			name: 'About',
			to: 'About'
		},
		{
			name: 'Blank screen',
			to: 'Blank'
		}
	]
</script>

<style scoped>
	.section {
		@apply w-full bg-gray-50 py-8 px-5 rounded mb-8;
	}

	.btn-count {
		@apply px-3 py-1 bg-indigo-400 text-gray-50 rounded;
	}
</style>
