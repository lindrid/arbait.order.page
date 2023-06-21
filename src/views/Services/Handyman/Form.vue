<script setup>
    import HandymanForm from '@/components/Forms/Handyman.vue';
    import Header from "@/components/Header.vue";

    const props = defineProps({
        appId: {
            type: String,
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
		<section class="section">
            <Header/>
            <HandymanForm
                :app-id="appId"
                :category="category"
                :label="labels[category]"
            />
		</section>
	</main>
</template>
