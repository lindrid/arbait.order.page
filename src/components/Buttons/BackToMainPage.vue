<template>
	<small @click="router.push({path: '/'})" class="text-green-500">
		<i class="fa fa-chevron-left"></i>
    <span class="text-xl">
		  На главную
    </span>
	</small>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>