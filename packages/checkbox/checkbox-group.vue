<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JmsCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>

<style>

</style>
