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
    const movePage = async to => await router.push({ name: to })

    const routes = [
        {
            name: 'О нас',
            to: 'About'
        },
        {
            name: 'Галерея',
            to: 'Gallery'
        }
    ]
</script>