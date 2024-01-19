<template>
  <div class="container">
    <div class="container__wrapper" v-if="data">
      <p v-if="myItems" class="container__items" key="id">Выбрано: <span>{{ myItems }}</span></p>
      <p class="container__description">{{result.description}}</p>
      <div class="container__checkboxes" v-if="data === '4'">
        <template v-for="item in items" :key="item.item.name">
          <div class="container__checkbox">
            <input type="checkbox" :id="item.item.name" :value="item.item.name" v-model="checked">
            <label class="container__checkbox-name" :for="item.item.name">{{item.item.name}}</label>
          </div>
          <div class="container__checkboxes-description">{{item.item.description}}</div>
        </template>
      </div>
      <router-link :to="nextPage" v-if="!result.answers && data !== '54'">
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
      <template v-else-if="data === '54'">
        <div v-if="showForm" class="container__form">
          <div class="container__form-form">
            <label class="container__form-label" for="question"  v-if="error">Неправильно! подумайте ещё!</label>
            <input  type="text" v-model="answer" id="question" placeholder="Введите ответ">

          </div>
          <base-button
              label="Проверить"
              @submitValue="checkAnswer(answer)"
              class="container__answers-button"
          />
        </div>
        <base-button
            v-else
            @submitValue="goNext"
            class="container__button"
            :label="result.button"
        />
      </template>
      <template v-else>
        <div class="container__answers">
          <template v-for="btn in result.answers" :id="btn.value">
            <router-link :to="btn.value" >
              <base-button
                  @submitValue="chooseAnswer(btn.go_to)"
                  class="container__button container__answers-button"
                  :label="btn.value"
              />
            </router-link>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  import text from '/src/data/text.json'
  import {ref} from "vue";
  import BaseButton from "../components/BaseButton.vue";
  import router from "../router/router.js";



  const data = localStorage.getItem('page')
  const result = text[data]
  const items = ref(result.items)

  const checked = ref([])

  const nextPage = ref(result.go_to?.page)
  const answer = ref(0)
  const error = ref(false)
  const showForm = ref(true)

  const myItems = localStorage.getItem('items')


  const checkAnswer = (val) => {
    if(val !== '26'){
      error.value = true
    } else if(val === '26'){
      showForm.value = false
    }
  }
  const setItems = (value) => {
    if (checked.value.length === 3) {
      localStorage.setItem('items', value)
      localStorage.removeItem('page')
      localStorage.setItem('page', result.go_to.page)
    }
  }

  const goNext = () => {
    localStorage.removeItem('page')
    localStorage.setItem('page', result.go_to.page)
    if(result.go_to.page === '/') {
      localStorage.removeItem('items')
    }
  }

  const chooseAnswer = (value) => {
    localStorage.removeItem('page')
    localStorage.setItem('page', value)
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
        overflow-y: auto;
      }

      &__items {
        font-size: 18px;
        text-align: left;
        cursor: pointer;
      }
      span {
        display: none;
      }
      &__items {
        &:hover {
          span {
            display: inline-block;
          }
        }
      }
      &__description {
        margin-bottom: 15px;
        white-space: pre-wrap;
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
      &__form {
        display: flex;
        align-items: center;
        &-form {
          display: flex;
          flex-direction: column;
          margin-right: 10px;
        }
        &-label {
          font-size: 18px;
        }
      }
    }
    input[type=checkbox] {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      cursor: pointer;
    }
    input[type=text] {
      height: 50px;
      font-size: 18px;
    }

</style>