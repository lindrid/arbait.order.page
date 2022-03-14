<template>
	<main>
		<section class="section">
			<strong class="text-3xl inline-block mb-8">
				Добро<span class="text-green-500"> пожаловать </span><span class="text-yellow-500">в Арбайт</span> 👏🏻
			</strong>
			<p class="mb-5">
				Сделайте заказ услуги
			</p>
			<a href="https://github.com/or-abdillh/vue-tailwind.git" target="_blank"
		    class="bg-gray-600 hover:bg-opacity-75 focus:ring-2 text-gray-50 px-5 py-2 rounded-lg inline-block">
				<span class="mx-2">Button</span>
			</a>
			<div class="flex flex-wrap gap-2 mt-3 mx-2">
				<template v-for="(item, x) in dependencies" :key="x">
					<Pill @click="movePage('Blank')" :label="item" />
				</template>
			</div>
		</section>

		<section class="section flex flex-col items-center gap-3">
			<small>Current click</small>
			<h1 class="text-5xl font-medium">{{ count.count }}</h1>
			<div class="flex gap-4 mt-3">
				<button @click="count.click()" class="btn-count">Click++</button>
				<button @click="count.doubleClick()" class="btn-count">Click * 2</button>
			</div>
		</section>

		<section class="mb-6">
			<h1 class="text-xl mb-3">
				<i class="fa fa-chevron-right"></i>
				Routes
			</h1>
			<div class="flex gap-4">
				<template v-for="(route, i) in routes" :key="i">
					<a @click="movePage(route.to)" class="text-green-500 text-lg hover:text-green-200 duration-300">
					   {{ route.name }}
					</a>
				</template>
			</div>			
		</section>
		
		<section>
			<h1 class="text-xl">
				<i class="fa fa-chevron-right"></i>
				All dependencies
			</h1>
		</section>
		<Footer />
	</main>
</template>

<script setup>
	import { useCount } from '@/stores/counter'
	import { useRouter } from 'vue-router'
	import Pill from '@/components/Pill.vue'
	import Footer from '@/components/Footer.vue'
	
	const count = useCount();
	const router = useRouter();

	const movePage = to => router.push({ name: to });
	
	const dependencies = [
        "Вывоз мусора",
		"Доставка",
		"Грузчики",
		"Переезд",
		"Разнорабочие",
	];

	const routes = [
		{
			name: 'About',
			to: 'About'
		},
		{
			name: 'Blank screen',
			to: 'Blank'
		}
	];
</script>

<style scoped>
	.section {
		@apply w-full bg-gray-50 py-8 px-5 rounded mb-8;
	}

	.btn-count {
		@apply px-3 py-1 bg-indigo-400 text-gray-50 rounded;
	}
</style>
