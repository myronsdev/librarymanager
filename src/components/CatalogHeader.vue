<template>
  <div class="header">
    <div class="header__item">
      <h1>{{title}}</h1>
    </div>
    <div class="header__item">
      <span class="mdi mdi-plus-circle" @click="$emit('openModal')"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}

</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .mdi-plus-circle {
      font-size: 30px;
      cursor: pointer;
    }
    &__item {
      display: flex;
      flex-direction: column;
    }
  }
</style>