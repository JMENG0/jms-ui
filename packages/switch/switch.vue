<template>
  <div class="jms-switch" @click="handleChange" :class="{ 'is-checked': currentVal }">
    <input
        class="jms-switch__input"
        type="checkbox"
        ref="input"
        :name="name">

    <span class="jms-switch__core" ref="core"
          :style="{
      'background-color': currentVal? activeColor : inactiveColor,
      'border-color':  currentVal? activeColor : inactiveColor
    }">
      <span class="jms-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'JmsSwitch',
  data(){
    return{
      // currentVal: false
    }
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },
    name: {
      type: String,
      default: ''
    },
    trueVal: {
      type: [Boolean, String, Number],
      default: true
    },
    falseVal: {
      type: [Boolean, String, Number],
      default: false
    },
  },
  computed: {
    currentVal(){
      return this.value === this.trueVal;
    }
  },
  watch: {
    // currentVal(val) {
    //   this.$emit('change', val);
    // }
  },
  methods: {
    handleChange() {
      //change 要相反
      const val = this.currentVal ? this.falseVal : this.trueVal;
      this.$emit('input', val);
      this.$emit('change', val);
      this.$nextTick(() => {
        this.$refs.input.checked = this.currentVal;
      });
    }
  },
  mounted() {
    /* istanbul ignore if */
    this.$refs.input.checked = this.currentVal;
  }
}
</script>

<style lang='scss'>
.jms-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .jms-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align: middle;

    .jms-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }

  }

  .jms-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}

.jms-switch.is-checked {

  .jms-switch__core {
    border-color: #409eff;
    background-color: #409eff;

    .jms-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>