<script setup>
	import { useRouter } from 'vue-router'
	const router = useRouter()
</script>

<template>
	<small @click="router.go(-1)" class="text-green-500">
		<i class="fa fa-chevron-left"></i>
    <span class="text-xl">
		  Назад
    </span>
	</small>
</template>
