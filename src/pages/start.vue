<template>
  <div class="container">
    <div class="container__start">
      <p class="container__text start">
        Перед тем как приехать в цирковой лагерь, прочти это!
        Наши поздравления! После того как вы провели месяц в цирковом лагере, ты и твой приятель Ричи были выбраны в качестве гостей в настоящем цирке.
        Но это не простой цирк с жонглерами и прочими развлечениями.
        Это смертельно опасный цирк!
        Только если вы с Ричи сделаете правильный выбор, вам удастся испытать самые острые впечатления и остаться в живых.
        Но прежде ты должен выбрать себе в помощь три вещи. Читай список этих вещей на следующей странице. А потом уж сам решай, что тебе больше всего подходит.
        И помни: ты можешь взять только три предмета — не больше!
        Может, они тебе пригодятся, когда дела примут скверный оборот?
      </p>
      <router-link to="/horror_story/4">
        <BaseButton @submitValue="setPage" class="container__button" label="Выбрать предметы"/>
      </router-link>
    </div>
  </div>

</template>

<script setup>

  import BaseButton from "../components/BaseButton.vue";

  const setPage = () => {
    localStorage.setItem('page', '4')
  }
</script>


<style lang="postcss" scoped>
  .container {
    background-image: url("../assets/img/bg_2.jpg");
    &__start {
      background-color: #000;
      opacity: 0.8;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 1224px;
      padding: 25px;
    }
    &__text {
      font-size: 38px;
      padding: 50px;
    }
    &__button {
      border: 2px solid #EE9945;
      box-shadow: #EE9945 4px 4px 0 0, #000 4px 4px 0 1px;
    }
  }

</style>