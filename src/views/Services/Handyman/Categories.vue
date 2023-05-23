<template>
	<main>
		<section class="section">
            <Header/>

			<strong class="text-3xl ml-5">
                <span class="flex items-center justify-center mb-5">
                    Разнорабочие
                </span>
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
    import Header from "@/components/Header.vue";
	
	const router = useRouter()

	const movePage = (category) => router.push({
        path: '/handyman/' + category + '/actions',
    });
	
	const categories = [
        {
          name: "Услуга землекопов",
          category: 'digger'
        },
        {
          name: "Услуга штукатурщиков",
          category: 'plasterer'
        },
        {
          name: "Услуга маляров",
          category: 'decorator'
        },
        {
          name: "Услуга разнорабочих",
          category: 'other'
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
