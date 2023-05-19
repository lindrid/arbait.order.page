<template>
	<main>
		<section class="section">
			<strong class="text-3xl ml-5">
                <div class="flex items-center justify-center">
                    Вывоз мусора
                </div>
            </strong>
                <strong
                    class="text-2xl text-yellow-600 flex items-center justify-center"
                >
                    Нужны грузчики
                </strong>
                <strong
                    class="text-2xl text-yellow-600 flex items-center justify-center mb-5"
                >
                    для выноса мусора?
                </strong>

                <BackBtn />

            <div class="
                flex flex-wrap gap-6 mt-10 flex
                items-center justify-center 2xl:px-[300px] px-[50px]
            ">
                <Pill
                    class="textXl text-center"
                    @click="movePage(category, truck, 'yes', appId)"
                    :label="'Да'"
                />
                <Pill
                    class="textXl text-center"
                    @click="movePage(category, truck,'no', appId)"
                    :label="'Нет (вынесем сами)'"
                />
            </div>
		</section>

		<Footer />
	</main>
</template>

<script setup>
	import { useRouter } from 'vue-router'
    import BackBtn from '@/components/Buttons/Back.vue';
    import Pill from '@/components/Pill.vue'
	import Footer from '@/components/Footer.vue'

	const router = useRouter()

    const movePage = (category, truck, answer, appId) => {
        const id = (appId === null) ? '' : '/' + appId;
        router.push({
            path: '/form/trash/' + category + '/' + truck + '/' + answer + id,
        });
    }

    const props = defineProps({
        category: {
            type: String,
            default: 'construct'
        },
        truck: {
            type: String,
            default: 'truck3'
        },
        appId: {
            type: Number,
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
