<template>
  <label class="jms-checkbox"
         :class="{
           'is-checked': isCheck,
           'is-disabled': disabled
         }">
      <span class="jms-checkbox__input">
        <span class="jms-checkbox__inner"></span>
        <input
            class="jms-checkbox__original"
            type="checkbox"
            :value="label"
            :true-value="trueLabel"
            :false-value="falseLabel"
            :name="name"
            v-model="model"
            :disabled="disabled">
      </span>

    <span class="jms-checkbox__label">
      <slot>
        <template>{{ label }}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'JmsCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (val) {
        this.isGroup ? this.CheckboxGroup.$emit('input', val) : this.$emit('input', val)
      }
    },
    isGroup () {
      // 判断是否是group包裹
      return !!this.CheckboxGroup
    },
    isCheck () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trueLabel: {
      type: [Boolean, String, Number],
      default: true
    },
    falseLabel: {
      type: [Boolean, String, Number],
      default: false
    }
  }
}
</script>

<style lang="scss">
.jms-checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .jms-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .jms-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }

    .jms-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);

      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }

  }

  .jms-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

.is-checked {
  color: #409eff;

  .jms-checkbox__input {
    .jms-checkbox__inner {
      border-color: #409eff;
      background: #409eff;
    }

    .jms-checkbox__inner:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
}
</style>
