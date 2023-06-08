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
                    Нужны грузчики?
                </strong>

                <BackBtn />

            <div class="
                flex flex-wrap gap-6 mt-10 flex
                items-center justify-center 2xl:px-[300px] px-[50px]
            ">
                <Pill
                    class="textXl text-center"
                    @click="movePage(category, 'yes', appId)"
                    :label="'Да'"
                />
                <Pill
                    class="textXl text-center"
                    @click="movePage(category, 'no', appId)"
                    :label="'Нет'"
                />
            </div>
            <Footer class="mt-10"/>
        </section>
	</main>
</template>

<script setup>
	import { useRouter } from 'vue-router'
    import BackBtn from '@/components/Buttons/Back.vue';
    import Pill from '@/components/Pill.vue'
	import Footer from '@/components/Footer.vue'
    import Header from "@/components/Header.vue";

	const router = useRouter()

	const movePage = function (category, answer, appId) {
        const name = appId === null ? 'FormMovingWorkers' : 'FormMovingWorkersAppId';
        router.push({
            name: name,
            params: {
                category: category,
                workers: answer,
                appId: appId
            }
        });
    }

    const props = defineProps({
        category: {
            type: String,
            default: null
        },
        appId: {
            type: String,
            default: null
        }
    });
</script>

<style scoped>
	.section {
		@apply w-full bg-gray-50 py-8 px-5 rounded mb-2;
	}

	.textXl {
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
    }

    span {
        flex:1 0 auto;
    }
</style>
