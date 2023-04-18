<template>
	<small @click="router.go(routerDelta)" class="text-green-500">
		<i class="fa fa-chevron-left"></i>
    <span class="text-xl">
		  Назад
    </span>
	</small>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  label: {
    type: String,
    default: 'Назад'
  },
  routerDelta: {
    type: Number,
    default: -1
  }
})
</script>