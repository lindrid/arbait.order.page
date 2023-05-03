<template>
	<main>
		<section class="section">
			<strong class="text-3xl ml-5">
                <div class="flex items-center justify-center">
                    Переезд
                </div>
            </strong>
                <strong
                    class="text-2xl text-yellow-600 flex items-center justify-center mb-5"
                >
                    Выбор машины
                </strong>

                <BackBtn />

            <div class="
                flex flex-wrap gap-6 mt-10 flex
                items-center justify-center 2xl:px-[300px] px-[50px]
            ">
                <template v-for="(item, x) in categories" :key="x">
                    <Pill
                        class="textXl text-center"
                        @click="movePage(item.category)"
                        :label="item.name"
                    />
                </template>
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

	const movePage = (category) => router.push({
        path: '/moving/' + category + '/actions',
    });
	
	const categories = [
        {
            name: "Микроавтобус",
            category: 'van'
        },
        {
          name: "Открытый бортовик <br> (длина до 3м)",
          category: 'flatbed'
        },
        {
          name: "Закрытая будка до 2т <br> (1.9м / 2м / 3м)",
          category: 'lorry2'
        },
        {
          name: "Закрытая будка от 2 до 3т <br> (2.1м / 2м / 4м)",
          category: 'lorry3'
        },
        {
          name: "Будка более 4т",
          category: 'lorry4'
        },
	]
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
