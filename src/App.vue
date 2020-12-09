<template>
  <div id="app">
    <fe-button @click="click">button</fe-button>
  </div>
</template>

<script>
import FeButton from '@/packages/button'

export default {
  components: {
    FeButton
  },

  methods: {
    click(e) {
      console.log(e)
    }
  }
}
</script>
