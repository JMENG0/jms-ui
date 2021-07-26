<template>
  <div class="jms-form-item">
    <label class="jms-form-item__label" :style="{width: _labelWidth }">{{ label }}</label>
    <div class="jms-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JmsFormItem',
  inject: ['Form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String
    }
  },
  computed: {
    _labelWidth () {
      if (this.labelWidth) {
        return this.labelWidth
      }
      if (this.Form && this.Form.labelWidth) {
        return this.Form.labelWidth
      }
      return '80px'
    }
  }

}
</script>

<style lang="scss">
.jms-form-item {
  &__label {
    box-sizing: border-box;
    float: left;
    vertical-align: middle;
    text-align: right;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
  }

  &__content {
    box-sizing: border-box;
    line-height: 40px;
  }
}
</style>
