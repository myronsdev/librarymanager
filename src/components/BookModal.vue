<template>
  <div class="book-modal" :style="{ display: show ? 'block' : 'none' }">
    <div class="book-modal__content">
      <div class="book-modal__exit" @click="closeModal">x</div>
      <div class="book-modal__title">Add Book</div>
      <input type="text" v-model="book.name" placeholder="Book Title" />
      <input type="text" v-model="book.author" placeholder="Author" />
      <input type="text" v-model="book.year" placeholder="Year" />
      <input type="text" v-model="book.genre" placeholder="Genre" />
      <div class="book-modal__add" @click="addBook">ADD</div>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      book: {
        name: "",
        author: "",
        year: "",
        genre: "",
        id: uuid(),
        available: true
      },
    };
  },
  methods: {
    addBook() {
      this.$emit("addBook", this.book);
      this.clearBook();
    },
    closeModal() {
      this.$emit("closeModal", this.book);
      this.clearBook();
    },
    clearBook() {
      this.book = {
        name: "",
        author: "",
        year: "",
        genre: "",
        id: uuid(),
        available: true
      };
    },
  },
};
</script>

<style lang="scss">
.book-modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 25%;
  top: 10%;
  width: 50%;
  height: 50%;
  &__content {
    border-radius: 10px;
    background-color: #eff0f2;
    margin: 15% auto;
    padding: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    filter: drop-shadow(-7px -7px 14px #FFFFFF) drop-shadow(7px 7px 14px #BFC1CC);
    input {
      display: block;
      margin-bottom: 1rem;
      background: #eff0f2;
      height: 45px;
      padding: 5px 10px;
      box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 7px #bfc1cc;
      border-radius: 23px;
      border-color: transparent;
    }
  }
  &__title {
    font-size: 20px;
    text-align: left;
    margin-bottom: 1rem;
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
