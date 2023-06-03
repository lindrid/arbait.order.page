<template>
    <i v-if="icon" class="fa fa-chevron-left"></i>

    <span   v-if="minus1Page"

        @click="router.go(-1)"
        :class="classDef"
    >Назад</span>

    <span   v-else>
        <router-link
            :class="classDef"
            :to="previousPage"
        >
            Назад
        </router-link>
    </span>

</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { computed } from "vue";

    const router = useRouter();

    const props = defineProps({
        label: {
            type: String,
            default: 'Назад'
        },
        classDef: {
            type: String,
            default: "ml-1 text-green-500 text-xl"
        },
        icon: {
            type: Boolean,
            default: true
        },
        minus1Page: {
          type: Boolean,
          default: false
        }
    });

    const previousPage = computed(() => {
        // noinspection JSValidateTypes
        /**
         * @type {TMeta}
         */
        const meta = router.currentRoute.value.meta;
        const fn = meta.backFn;
        return fn(router);
    });
</script>