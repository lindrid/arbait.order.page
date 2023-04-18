<template>
	<main>
		<section class="py-8 px-5">
			<BackToMainPage />
		</section>

    <section class="section">
      <strong class="text-2xl ml-2">
				<span class="text-yellow-700 flex items-center justify-center">
					Заявка
				</span>
        <span class="flex items-center justify-center">
          в процессе
        </span>
        <span class="text-yellow-700 flex items-center justify-center">
					сбора
				</span>
        <span class="flex items-center justify-center">
          диспетчером.
        </span>
      </strong>

      <strong class="text-xl ml-2">
        <span class="flex items-center justify-center">
          С вами свяжутся по
        </span>
        <span class="flex items-center justify-center">
          оставленному номеру
        </span>
        <span class="flex items-center justify-center">
          в ближайшее время.
        </span>

        <span class="flex items-center justify-center mt-5">
          Есть вопросы?
        </span>
        <a
            class="textXl cursor-pointer flex items-center justify-center text-yellow-700"
            @click="openPhoneNumber('+79244298474')"
        >
            Звоните
          </a>
        <span class="flex items-center justify-center">
          или&nbsp;&nbsp;
          <a :href="'//' + 'wa.me/' +79244298474" class="text-yellow-700">
            пишите
          </a>
        </span>

        <span class="flex items-center justify-center">
          диспетчеру
        </span>
      </strong>
    </section>
	</main>
</template>


<script setup>
import BackToMainPage from '@/components/Buttons/BackToMainPage.vue'

const openPhoneNumber = function (number) {
  window.open('tel:' + number);
}
</script>
