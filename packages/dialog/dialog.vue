<template>
  <transition name="dlg">
    <!-- .self修饰符表示只有点击自己才触发 -->
    <div class="jms-dialog__wrapper" v-show="visible" @click.self="dlgClose">
      <div class="jms-dialog" :style="{width, marginTop:top}">
        <div class="jms-dialog__header">
          <slot name="title">
            <span class="jms-dialog__title">{{ title }}</span>

          </slot>
          <button class="jms-dialog__headerbtn" @click="dlgClose">
            <i class="el-icon-close"></i>
          </button>
        </div>
        <div class="jms-dialog__body">
          <!--默认插槽-->
          <slot></slot>
        </div>
        <div class="jms-dialog__footer" v-if="$slots.footer">
          <slot name="footer">

          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import JmsButton from './button.vue'

export default {
  name: 'JmsDialog',
  components: {
    // JmsButton
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    dlgClose () {
      // .sync 修饰符，语法糖
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang='scss'>
.jms-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, .5);

  .jms-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;

      .jms-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }

      .jms-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;

        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all; //允许换行
    }

    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;

      .jms-button:first-child {
        margin-right: 20px;
      }
    }
  }

}

//过度动画
.dlg-enter-active {
  animation: dlg-in .5s;
}

.dlg-leave-active {
  animation: dlg-in .5s reverse;
}

@keyframes dlg-in {
  0% {
    //transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    //transform: scale(1);
    opacity: 1;
  }
}
</style>
