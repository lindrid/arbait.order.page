<script setup>
    import HandymanForm from '@/components/Forms/Handyman.vue';

    const props = defineProps({
        appId: {
            type: Number,
            default: null
        },
        category: {
            type: String,
            default: 'other'
        },
    });

    const labels = {
        digger: 'Земплекопов',
        plasterer: 'Штукатурщиков',
        decorator: 'Маляров',
        other: 'Разнорабочих'
    };
</script>

<template>
	<main>
		<section class="py-8 px-5">
            <HandymanForm
                :app-id="appId"
                :category="category"
                :label="labels[category]"
            />
		</section>
	</main>
</template>
