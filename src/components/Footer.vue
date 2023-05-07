<template>
	<footer class>
		<div class="flex items-center justify-center flex gap-6">
			<template v-for="(route, i) in routes" :key="i">
				<a @click="movePage(route.to)" class="text-green-500 text-lg hover:text-green-200 duration-300">
					{{ route.name }}
				</a>
			</template>
		</div>
	</footer>
</template>

<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const movePage = to => router.push({ name: to })
    const dependencies = [
        "Vue v.3.2.25",
        "Tailwindcss v.3.0.18",
        "Vue router v.4.0.12",
        "Pinia v.2.0.10",
        "Vite v.2.7.2",
        "Postcss v.8.4.5",
        "Autoprefixer v.10.4.2"
    ]
    const routes = [
        {
            name: 'О нас',
            to: 'About'
        },
        {
            name: 'Галерея',
            to: 'Blank'
        }
    ]
</script>