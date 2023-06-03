<template>
	<main>
		<section class="section">
           <Header/>

			<strong class="text-3xl  ml-5">
				<span class="text-yellow-600 flex items-center justify-center">
					Арбайт.грузчики
				</span>
                <span class="flex items-center justify-center">
                    грузоперевозки
                </span>
			</strong>

            <div class="mt-12">
                <template v-for="(item, x) in services" :key="x">
                    <div
                        class="flex flex-wrap gap-6 items-center
                        justify-center
                        sm:px-[30px]
                        md:px-[50px]
                        mt-4
                    ">
                        <Pill
                            class="textXl text-center"
                            @click="movePage(item.service)"
                            :label="item.name"
                        />
                    </div>
                </template>
            </div>

            <Footer class="mt-10"/>
        </section>

	</main>

</template>

<script setup>
    import { useRouter } from 'vue-router';
    import Pill from '@/components/Pill.vue';
	import Footer from '@/components/Footer.vue';
    import Header from "@/components/Header.vue";
	
	const router = useRouter()

	const movePage = function (service) {
        if (service === 'handyman') {
            router.push({name: 'HandymanCategories'});
            return;
        }
        router.push({
            name: 'ServiceActions',
            params: {
                service: service
            }
        });
    }
	
	const services = [
        {
            name: "Услуга грузчиков",
            service: 'loader'
        },
        {
            name: "Услуга разнорабочих",
            service: 'handyman'
        },
        {
            name: "Переезд или доставка",
            service: 'moving'
        },
        {
            name: "Вывоз и вынос мусора",
            service: 'trash'
        },
	]
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
