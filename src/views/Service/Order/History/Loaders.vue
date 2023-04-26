<template>
  <div class="text-black-500 font-bold py-6 text-center">
    <span class="text-2xl">
      {{ title }}
    </span>
  </div>

  <BackBtn class="mx-5" />

  <span v-for="(app, x) in store.applications" :key="x">
    <div
        class=" mt-5 text-black-500 text-lg hover:text-yellow-500
                duration-300 text-center "
        @click="openForm(app)"
    >
      {{ app.date + ' ' + app.time + ', ' + app.address + ', ' + app.worker_total }} чел
    </div>
  </span>
</template>

<script>
import { useAppHistory } from '@/stores/app/history';
import router from '@/router';

export default {
  data: function () {
    return {
      store: useAppHistory()
    }
  },

  methods: {
    openForm(app) {
      router.push({name: 'FormLoaders', params: {appId: app.id}})
    }
  },

  /*
    Create constants
   */
  beforeCreate() {

  },

  mounted () {}
}
</script>

<script setup>
    import BackBtn from '@/components/Buttons/Back.vue'

    const title = 'История заявок';
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.mytime, .form-group {
  font-size: 110%
}
.form-control{
  font-size: 120%;
}
.worker-count {
  width: 100px;
}
.panel {
  font-size: 130%;
}
body {
  margin: 0;
}
#text {
  height: 25vh;
}
.help-block{
  color: red;
}
</style>