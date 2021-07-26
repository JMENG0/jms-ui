<template>
  <div class="jms-input" :class="{ 'jms-input--suffix': showSuffix }">
    <input
      class="jms-input__inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="disabled ? '' : placeholder"
      :value="value"
      @input="lv_input"
      :type="showPassword ? (passwordVisible ? 'text':'password'): type"
      :name="name"
      :disabled="disabled"
    />
    <span class="jms-input__suffix" v-if="showSuffix">
      <i
        v-if="clearable && this.value"
        class="el-icon-circle-close"
        @click="clear"
      ></i>
      <i
        v-if="showPassword"
        class="el-icon-view"
        :class="{'jms-icon-view-active': passwordVisible}"
        @click="handlePasswordVisible"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'JmsInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入...'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: { default: null },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    lv_input (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang='scss'>
.jms-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .jms-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.jms-input--suffix {
  .jms-input__inner {
    padding-right: 30px;
  }
  .jms-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .jms-icon-view-active {
      color: #409eff;
    }
  }

}
</style>
