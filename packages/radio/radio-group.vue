<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JmsRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    }
  }
}
</script>

<style>

</style>
