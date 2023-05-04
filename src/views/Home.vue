<template>
	<main>
		<section class="section">
			<strong class="text-3xl ml-5">
				<span class="text-yellow-600 flex items-center justify-center">
					Арбайт.грузчики
				</span>
                <span class="flex items-center justify-center">
                  и грузоперевозки
                </span>
			</strong>

      <span>
        <div class="flex flex-wrap gap-6 mt-10 flex items-center justify-center 2xl:px-[300px] px-[50px]">
          <template v-for="(item, x) in services" :key="x">
            <Pill
                class="textXl text-center"
                @click="movePage(item.service)"
                :label="item.name"
            />
          </template>
        </div>
      </span>
		</section>

		<Footer />
	</main>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import Pill from '@/components/Pill.vue'
	import Footer from '@/components/Footer.vue'
	
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
	.section {
		@apply w-full bg-gray-50 py-8 px-5 rounded mb-8;
	}

	.textXl {
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
    }

    span {
        flex:1 0 auto;
    }
</style>
