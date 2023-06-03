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

            <div class="mt-10">
                <template v-for="(item, x) in categories" :key="x">
                    <div class="
                        flex flex-wrap gap-6  mt-4
                        items-center justify-center
                        px-[30px]
                    ">
                        <Pill
                            class="textXl text-center"
                            @click="movePage(item.category)"
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
	.textXl {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  }

    span {
      flex:1 0 auto;
    }
</style>
