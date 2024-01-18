<template>
  <div class="container">
    <div class="container__wrapper" v-if="data" :style="data === '4' ? 'overflow-y: scroll': ''">
      <p class="container__description">{{result.description}}</p>
      <div class="container__checkboxes" v-if="data === '4'">
        <template v-for="item in items" :id="item.item.name">
          <div class="container__checkbox">
            <input type="checkbox" :id="item.item.name" :value="item.item.name" v-model="checked">
            <label class="container__checkbox-name" :for="item.item.name">{{item.item.name}}</label>
          </div>
          <div class="container__checkboxes-description">{{item.item.description}}</div>
        </template>
      </div>
      <router-link :to="data" v-if="!result.answers">
        <base-button
            v-if="data === '4'"
            @submitValue="setItems(checked)"
            :disabled="checked.length < 3"
            class="container__button"
            :label="checked.length === 3 ? 'Начнём' : result.button "
        />
        <base-button
            v-else
            @submitValue="goNext"
            class="container__button"
            :label="result.button"
        />
      </router-link>
      <template v-else>
        <div class="container__answers">
          <base-button
              v-for="btn in result.answers" :id="btn.value"
              @submitValue="chooseAnswer(btn.value)"
              class="container__button container__answers-button"
              :label="btn.value"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  import text from '/src/data/text.json'
  import {ref} from "vue";
  import BaseButton from "../components/BaseButton.vue";



  const data = localStorage.getItem('page')
  const result = text[data]
  const items = ref(result.items)

  const checked = ref([])

  const setItems = (value) => {
    if (checked.value.length === 3) {
      localStorage.setItem('items', value)
      localStorage.removeItem('page')
      localStorage.setItem('page', result.go_to.page)
      location.reload()
    }
  }

  const goNext = () => {
    localStorage.removeItem('page')
    localStorage.setItem('page', result.go_to.page)
    location.reload()
  }

  const chooseAnswer = (value) => {
    localStorage.removeItem('page')
    localStorage.setItem('page', value)
    location.reload()
  }



</script>

<style lang="postcss" scoped>
    .container {
      background-image: url("../assets/img/bg_circus.jpg");
      font-size: 38px;
      color: #fff;

      &__wrapper {
        background-color: #000;
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
        max-width: 1450px;
      }
      &__description {
        margin-bottom: 15px;
      }
      &__checkboxes {
        font-size: 34px;
        &-description {
          margin-bottom: 15px;
        }
      }
      &__checkbox {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        &-name {
          font-weight: bold;
        }
      }
      &__button {
        border: 1px solid #622625;
        box-shadow: #622625 4px 4px 0 0, #000 4px 4px 0 1px;
      }

      &__answers {
        display: flex;
        align-items: center;
        &-button:first-child {
          margin-right: 20px;
        }
      }
    }
    input[type=checkbox] {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      cursor: pointer;
    }
</style>