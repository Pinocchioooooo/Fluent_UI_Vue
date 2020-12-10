<template>
  <button :class="['fe-button', { '-text': type === 'text' }]" :disabled="disabled" @click="handleClick">
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
