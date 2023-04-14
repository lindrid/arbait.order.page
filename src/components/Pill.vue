<template>
	<span class=" bg-slate-600 hover:scale-75 duration-300
                  text-gray-50
                  3xl:px-10 3xl:py-6
                  2xl:px-7 2xl:py-4
                  px-5 py-2
                  rounded-xl text-base"
    >
		{{ label }}
	</span>
</template>

<script setup>
	const props = defineProps({
		label: {
			type: String,
			default: 'Label'
		}
	})
</script>
