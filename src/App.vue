<template>
  <div id="app">
    <nav>
      <div
        :class="['nav-item', { 'is-active': active === index }]"
        v-for="(item, index) in items"
        :key="index"
        @click="active = index"
      >
        {{ item }}
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: ['button', 'input']
    }
  },

  watch: {
    active(newValue) {
      this.$router.push(this.items[newValue])
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  display: flex;
  height: 100%;

  nav {
    flex: 0 0 200px;

    border: 1px solid #eeeeee;

    .nav-item {
      box-sizing: border-box;

      height: 40px;
      padding-left: 40px;

      border-left: 2px solid transparent;

      line-height: 40px;

      cursor: pointer;

      &.is-active {
        border-left: 2px solid #0078d4;

        background-color: #edebe9;

        font-weight: 600;
      }
    }
  }

  main {
    flex: 1;

    display: grid;
    place-items: center;
  }
}
</style>
