<script setup>

  defineProps({
    type: {
      default: 'submit'
    },
    value: {
      default: ''
    },
    label: {
      default: 'button'
    },
    disabled: {
      default: false
    }
  })



</script>

<template>
    <button
        ref="button"
        type="button"
        class="button"
        :type="type"
        :value="value"
        :disabled="disabled"
        @click="$emit('submitValue', value)"
    >{{label}}</button>
</template>

<style scoped lang="postcss">
    .button {
      background-color: #000;
      background-image: none;
      border: 1px solid #000;
      border-radius: 4px;
      box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
      font-size: 21px;
      font-weight: 400;
      line-height: 20px;
      margin: 15px 0;
      overflow: visible;
      padding: 20px 45px;
      text-align: center;
      text-transform: none;
      -webkit-user-select: none;
      white-space: pre-wrap;
      word-break: break-word;

      &:focus {
        text-decoration: none;
      }

      &:hover {
        text-decoration: none;
      }

      &:active {
        box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
        outline: 0;
      }

      &:not([disabled]):active {
        box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
        transform: translate(2px, 2px);
      }
    }

    @media (min-width: 768px) {
      .button {
        padding: 20px 45px;
      }
    }



</style>