<template>
  <button :class="['fe-button', { '-text': type === 'text' }]" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FeButton',

  props: {
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
