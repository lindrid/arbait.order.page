<template>
	<small @click="toMainPage()" class="text-green-500">
		<i class="fa fa-chevron-left"></i>
    <span class="text-xl">
		  На главную
    </span>
	</small>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter();

    const toMainPage = async function () {
        await router.push({path: '/'});
        await router.go(0);
    }
</script>