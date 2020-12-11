<template>
  <button
    class="fe-button"
    :disabled="disabled"
    :class="{
      '-text': type === 'text',
      '-plain': plain
    }"
    @click="handleClick"
  >
    <template v-if="icon"><i :class="icon"></i></template>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'FeButton',

  props: {
    icon: {
      type: String
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    plain: {
      type: Boolean
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
