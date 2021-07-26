<template>
  <label class="jms-radio"
         :class="{
           'is-checked': model === label ,
           'is-disabled': disabled
         }">
    <!-- 小圆 -->
    <span class="jms-radio__input">
      <span class="jms-radio__inner"></span>
      <input
          class="jms-radio__original"
          type="radio"
          :value="label"
          :name="name"
          v-model="model"
          :disabled="disabled"
          ref="radio">
    </span>
    <span class="jms-radio__label">
      <slot>
        <template>{{ label }}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'JmsRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (val) {
        this.isGroup ? this.RadioGroup.$emit('input', val) : this.$emit('input', val)
      }
    },
    isGroup () {
      // 判断是否是group包裹
      return !!this.RadioGroup
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
    }
  }
}
</script>

<style lang='scss'>
.jms-radio {
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

  .jms-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .jms-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }

    .jms-radio__inner:after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform .15s ease-in;
    }

    .jms-radio__original {
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
  }

  .jms-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.is-checked {

  .jms-radio__input {
    .jms-radio__inner {
      border-color: #409eff;
      background: #409eff;
    }

    .jms-radio__inner:after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  .jms-radio__label {
    color: #409eff;
  }
}

.is-disabled {
  cursor: not-allowed;

  .jms-radio__input {
    .jms-radio__inner {
      border-color: #c0c4cc;
      background: #f5f7fa;
    }

    .jms-radio__inner:after {
      background-color: #c0c4cc;
    }
  }
  .jms-radio__label {
    color: #c0c4cc;
  }
}
</style>
