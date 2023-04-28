<template>
	<main>
        <div class="text-black-500 font-bold py-6 text-center">
            <span class="text-2xl"> {{ title }} </span>
        </div>
		<section class="bg-gray-50 py-8 px-5 rounded">
				<BackBtn />
            <div class="
                flex flex-wrap mt-10 flex items-center justify-center
                3xl:px-[90px] 2xl:px-[45px] px-[15px]"
            >
                <ul class="list-disc">
                    <li>Мы работаем на рынке <b>более 5 лет.</b></li>
                    <li>
                        За это время мы выполнили <b>более 9000 заявок</b>,
                        на которые <b>вышли более 20.000 работников</b>.
                    </li>
                    <li>
                        Количество работников: <b>более 7.000 чел.</b>
                    </li>
                </ul>
            </div>

            <div class="
                flex flex-wrap mt-10 flex items-center justify-center
                3xl:px-[90px] 2xl:px-[45px] px-[15px]"
            >
                Сейчас у вас появилась возможность сделать заказ через сайт,
                что дает вам возможность сэкономить на заказе, а нам - упрощает работу!
            </div>
		</section>
		<Footer />
	</main>
</template>
<script setup>
	import Footer from '@/components/Footer.vue'
	import BackBtn from '@/components/Buttons/Back.vue'

	const about = {
		name: 'Abdillah',
		subs: [
			'Fullstack Web Developer',
			'Javascript Enthusiast'
		]
	}
	
	const sosmed = [
		{
			icon: 'fab fa-github text-gray-800',
			href: 'https://github.com/or-abdillh'
		},
		{
			icon: 'fab fa-instagram text-pink-600',
			href: 'https://instagram.com/or.abdillh'
		},
		{
			icon: 'fab fa-facebook text-blue-700',
			href: 'https://facebook.com/abdillahcfc'
		}
	];

    const title = 'О нас';
</script>
