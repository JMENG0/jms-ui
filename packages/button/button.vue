<template>
  <button
    class="jms-button"
    :class="[
      `jms-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!--  使用 $slots 可以获取到传入的插槽信息， $slots.default 获取默认插槽  -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'JmsButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang='scss'>
.jms-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }

  //禁用状态
  &.is-disabled {
    cursor: not-allowed;
    color: #c0c4cc;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;

    &:hover,
    &:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }

  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }

    //禁用状态
    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
      }
    }

    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;

      &:hover,
      &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }

      //禁用状态
      &.is-disabled {
        cursor: not-allowed;
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;

        &:hover,
        &:focus {
          color: #8cc5ff;
          background-color: #ecf5ff;
          border-color: #d9ecff;
        }
      }
    }

  }

  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }

    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;

      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }

      //禁用状态
      &.is-disabled {
        cursor: not-allowed;
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8;

        &:hover,
        &:focus {
          color: #a4da89;
          background-color: #f0f9eb;
          border-color: #e1f3d8;
        }
      }
    }

    //禁用状态
    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
      }
    }
  }

  &--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }

    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;

      &:hover,
      &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }

      &.is-disabled {
        cursor: not-allowed;
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb;

        &:hover,
        &:focus {
          color: #bcbec2;
          background-color: #f4f4f5;
          border-color: #e9e9eb;
        }
      }
    }

    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
      }
    }
  }

  &--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }

    &.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;

      &:hover,
      &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
      }

      &.is-disabled {
        cursor: not-allowed;
        color: #f0c78a;
        background-color: #fdf6ec;
        border-color: #faecd8;

        &:hover,
        &:focus {
          color: #f0c78a;
          background-color: #fdf6ec;
          border-color: #faecd8;
        }
      }
    }

    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
      }
    }
  }

  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }

    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;

      &:hover,
      &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }

      &.is-disabled {
        cursor: not-allowed;
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;

        &:hover,
        &:focus {
          color: #f9a7a7;
          background-color: #fef0f0;
          border-color: #fde2e2;
        }
      }
    }

    &.is-disabled {
      cursor: not-allowed;
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
    }
  }

  //圆角
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
}

.jms-button [class*="el-icon-"] + span {
  margin-left: 5px;
}
</style>
