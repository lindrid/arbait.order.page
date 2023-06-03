<template>
	<main>
        <BackBtn :minus1-page="true" class-def="ml-2 text-green-500 text-xl"/>

        <silent-box
            :gallery="loaders"
            class="justify-center items-center flex mt-10 ml-10 gap-2"
        ></silent-box>

        <silent-box
            :image="moving[0]"
            class="justify-center items-center flex mt-10 ml-10 gap-2"
        ></silent-box>

        <silent-box
            :gallery="handyman"
            class="justify-center items-center flex mt-10 ml-10 gap-1"
        ></silent-box>
	</main>
</template>

<script setup>
import BackBtn from '@/components/Buttons/Back.vue'

const props = defineProps({
    category: {
        type: String,
        default: null
    },
    category2: {
        type: String,
        default: null
    }
});

const loaders = [
    {
        src: '/images/1.jpeg',
        description: 'Грузчики 1',
        thumbnail: '/images/1.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 92,
        alt: 'Image Alt',
    },
    {
        src: '/images/2.jpeg',
        description: 'Грузчики 2',
        thumbnail: '/images/2.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
    {
        src: '/images/3.jpeg',
        description: 'Грузчики 3',
        thumbnail: '/images/3.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 150,
    },
];

const moving = [
    {
        src: '/images/m1.jpeg',
        description: 'Доставка',
        thumbnail: '/images/m1.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 355,
    },
];

const handyman = [
    {
        src: '/images/h1.jpeg',
        description: 'Разрнорабочие 1',
        thumbnail: '/images/h1.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
    {
        src: '/images/h2.jpeg',
        description: 'Разрнорабочие 2',
        thumbnail: '/images/h2.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
    {
        src: '/images/h3.jpeg',
        description: 'Разрнорабочие 3',
        thumbnail: '/images/h3.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
    {
        src: '/images/h4.jpeg',
        description: 'Разрнорабочие 4',
        thumbnail: '/images/h4.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
    {
        src: '/images/h5.jpeg',
        description: 'Разрнорабочие 5',
        thumbnail: '/images/h5.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
    {
        src: '/images/h6.jpeg',
        description: 'Разрнорабочие 6',
        thumbnail: '/images/h6.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
    {
        src: '/images/h7.jpeg',
        description: 'Разрнорабочие 7',
        thumbnail: '/images/h7.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
    {
        src: '/images/h8.jpeg',
        description: 'Разрнорабочие 8',
        thumbnail: '/images/h8.jpeg',
        thumbnailHeight: 200,
        thumbnailWidth: 112,
    },
];
</script>