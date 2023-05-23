<template>
	<main>
		<section class="py-8 px-5">
			<BackBtn />
            <div
                class="mt-10 items-center justify-center flex text-2xl"
                v-if="category !== null"
            >
                В разработке
            </div>
		</section>
	</main>
</template>

<script setup>
import BackBtn from '@/components/Buttons/Back.vue'

const props = defineProps({
    category: {
        type: String,
        default: null
    },
    category2: {
        type: String,
        default: null
    }
});
</script>