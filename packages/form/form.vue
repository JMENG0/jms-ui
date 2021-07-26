<template>
  <div class="jms-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JmsForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String
    }
  }
}
</script>

<style>

</style>
