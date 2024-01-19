<template>
  <div class="container">
    <div class="container__wrapper">
      <h1 class="container__header">Добро пожаловать в этот мини квест, где от твоих решений зависит исход истории</h1>
      <p class="container__description">Выбирай разумно!</p>
      <router-link to="/start">
        <BaseButton
            class="container__button"
            label="Начать"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../components/BaseButton.vue";

</script>

<style scoped lang="postcss">
  .container {
    background-image: url("../assets/img/bg_1.jpg");
    color: #fff;

    &__wrapper {
      background-color: #000;
      opacity: 0.8;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px;
    }

    &__header {
      margin-bottom: 20px;
      font-size: 38px;
    }

    &__description {
      margin-top: 20px;
      margin-bottom: 40px;
    }

    &__button {
      border: 1px solid #622625;
      box-shadow: #622625 4px 4px 0 0, #000 4px 4px 0 1px;
    }
  }
</style>