<template>
  <div class="container">
    <h1 class="container__header">Добро пожаловать в этот мини квест, где от твоих решений зависит исход истории</h1>
    <p>Использована оригинальная история Р.Стайна "Цирк-западня"</p>
    <router-link to="/start">
      <BaseButton
          label="Начать"
      />
    </router-link>
  </div>
</template>

<script setup>
import BaseButton from "../components/BaseButton.vue";

</script>

<style scoped lang="postcss">
  .container {
    background-image: url("../assets/img/bg_1.jpg");
    color: #fff;

    &__header {
      margin-bottom: 65px;
      font-size: 38px;
    }
  }
</style>