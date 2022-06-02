<template>
  <div class="details-modal" :style="{ display: show ? 'block' : 'none' }">
    <div class="details-modal__content">
      <div class="details-modal__exit" @click="$emit('closeDetailsModal')">x</div>
      <div class="details-modal__title">{{book.name ?? ''}}</div>
      <div class="details-modal__author">{{book.author ?? ''}}</div>

      <div class="details-modal__detail">ISBN 9781501160837</div>
      <div class="details-modal__detail">Publisher : Atria Books (September 8, 2020)</div>
      <div class="details-modal__detail">Language : English</div>
      <div class="details-modal__detail">Paperback : 394 pages</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    show: Boolean,
    book: Object
  },
  data() {},
  methods: {},
};
</script>

<style lang="scss">
.details-modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 25%;
  top: 20%;
  width: 50%;
  height: 50%;
  &__content {
    color: #3C3E43;
    font-size: 20px;
    text-align: left;
    border-radius: 16px;
    background-color: #eff0f2;
    margin: 15% auto;
    padding: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    filter: drop-shadow(-7px -7px 14px #FFFFFF) drop-shadow(7px 7px 14px #BFC1CC);
  }
  &__title {
    font-weight: 700;
    text-align: left;
    
  }
  &__author {
    color: #686A73;
    font-weight: 400;
    margin-bottom: 5rem;
  }
  &__detail {
    font-size: 16px;
  }
  &__exit {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  &__add {
    background: #40c4ff;
    border-radius: 100px;
    width: 155px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    cursor: pointer;
  }
}
.show {
  display: block;
}
</style>
