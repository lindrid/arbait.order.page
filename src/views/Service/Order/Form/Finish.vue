<script setup>
	import BackToMainPage from '@/components/Buttons/BackToMainPage.vue'
</script>

<template>
	<main>
		<section class="py-8 px-5">
			<BackToMainPage />
		</section>

    <section class="section">
      <strong class="text-2xl ml-2">
				<span class="text-yellow-500 flex items-center justify-center">
					Заявка
				</span>
        <span class="flex items-center justify-center">
          в процессе
        </span>
        <span class="text-yellow-500 flex items-center justify-center">
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
          оставленному номеру (Когда?)
        </span>
      </strong>
    </section>
	</main>
</template>
