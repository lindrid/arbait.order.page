<template>
	<main>
		<section class="section">
            <Header/>

			<strong class="text-3xl ml-5">
                <div class="flex items-center justify-center">
                    Переезд или доставка
                </div>
            </strong>
                <strong
                    class="text-2xl text-yellow-600 flex items-center justify-center mb-5"
                >
                    Выбор машины
                </strong>

            <BackBtn/>

            <div class="
                flex flex-wrap gap-6 mt-10 flex
                items-center justify-center 2xl:px-[300px] px-[50px]
            ">
                <template v-for="(category, x) in MovingCategories" :key="x">
                    <Pill
                        class="textXl text-center"
                        @click="movePage(category.route, appId)"
                        :label="category.name"
                    />
                </template>
            </div>
            <Footer class="mt-10"/>
        </section>
	</main>
</template>

<script setup>
    import BackBtn from '@/components/Buttons/Back.vue';
    import Pill from '@/components/Pill.vue'
	import Footer from '@/components/Footer.vue'

    import { useRouter } from 'vue-router'
    import { MovingCategories } from "@/consts/categories/moving";
    import Header from "@/components/Header.vue";

    const router = useRouter()

	const movePage = (categoryRoute, appId) => {
        const id = (appId === null) ? '' : '/' + appId;
        router.push({
            path: '/moving/' + categoryRoute + '/workers' + id,
        });
    }

    const props = defineProps({
        appId : {
            type: String,
            default: null
        },
    });
</script>

<style scoped>
    .textXl {
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
    }

    span {
        flex:1 0 auto;
    }
</style>
