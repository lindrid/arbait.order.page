<template>
	<main>
        <div class="text-black-500 font-bold py-6 text-center">
            <span class="text-2xl"> {{ title }} </span>
        </div>
		<section class="bg-gray-50 py-8 px-5 rounded">
            <BackBtn :minus1-page="true" class-def="ml-2 text-green-500 text-xl"/>

            <div class="
                flex flex-wrap mt-10 flex items-center justify-center
                3xl:px-[90px] 2xl:px-[45px] px-[15px]"
            >
                <ul class="list-disc">
                    <li>Мы работаем на рынке <b>более 5 лет.</b></li>
                    <li>
                        За это время мы выполнили <b>более 9.000 заявок</b>.
                    </li>
                    <li>
                        За весь рабочий период на заявках отработало около <b>7.000 рабочих</b>,
                        которые совершили <b>более 20.000 выходов</b> на заявки.
                    </li>
                </ul>
            </div>

            <div class="
                flex flex-wrap mt-10 flex items-center justify-center
                3xl:px-[90px] 2xl:px-[45px] px-[15px]"
            >
                Сейчас у Вас появилась возможность сделать заказ через сайт,
                что дает Вам возможность сэкономить на заказе, а Нам - упрощает работу!
            </div>
            <Footer class="mt-10"/>
        </section>
	</main>
</template>
<script setup>
	import Footer from '@/components/Footer.vue'
	import BackBtn from '@/components/Buttons/Back.vue'

    const title = 'О нас';
</script>
