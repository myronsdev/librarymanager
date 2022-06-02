<template>
  <div class="books">
    <div class="books__header">
      <div>TITLE</div>
      <div>YEAR</div>
      <div>GENRE</div>
    </div>
    <div class="books__container">
      <div class="books__book" v-for="book in books" :key="book.id">
        <div class="books__image-container"><div></div></div>
        <div class="books__title">
          <span> {{ book.name }}</span>
          <span> {{ book.author }}</span>
          <span
              class="books__view-details"
              @click="$emit('showDetails', book.id)"
              >View Details</span>
        </div>
        <div class="books__year">{{ book.year }}</div>
        <div class="books__genre">{{ book.genre }}</div>
        <div class="books__trash" v-if="managerMode">
          <span
            class="mdi mdi-trash-can-outline"
            @click="$emit('deleteBook', book.id)"
          ></span>
          Edit
        </div>
        <div class="books__checkout" v-if="!managerMode">
          <button v-if="book.available" @click="$emit('checkout', book.id)">
            CHECK OUT
          </button>
          <span v-if="!book.available">Unavailable</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books: Array,
    managerMode: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.books {
  text-align: left;
  &__container {
    border: 1px solid #cbcdd6;
    border-radius: 0 0 4px 4px;
    max-height: 525px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #d9d9d9;
      border-radius: 10px;
    }
  }
  &__header {
    display: grid;
    grid-template-columns: 150px 150px 150px 150px 150px;
    background-color: #d9d9d9;
    border-radius: 4px 4px 0 0;
    height: 90px;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    justify-content: space-around;
    div:nth-child(1) {
      grid-column: 2 / span 1;
    }
    div:nth-child(2) {
      grid-column: 3 / span 1;
    }
    div:nth-child(3) {
      grid-column: 4 / span 1;
    }
  }
  &__book {
    display: flex;
    align-items: center;
    height: 175px;
    padding: 0 1rem 0 1rem;
    justify-content: space-around;
    border-bottom: 1px solid #cbcdd6;
    div {
      width: 150px;
    }
  }
  &__checkout {
    font-weight: 700;
    button {
      width: 105px;
      height: 25px;
      background-color: #40c4ff;
      color: #ffffff;
      filter: drop-shadow(-7px -7px 14px #ffffff)
        drop-shadow(7px 7px 14px #bfc1cc);
      border-radius: 100px;
      border: transparent;
      cursor: pointer;
    }
    span {
      color: #40c4ff;
      text-transform: uppercase;
    }
  }
  &__view-details {
    font-weight: 700;
    font-size: 16px;
    text-decoration: underline;
    margin-top: 1rem;
    color: #686a73;
    cursor: pointer;
  }
  &__image-container {
    div {
      width: 135px;
      height: 120px;
      background-color: #d9d9d9;
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    span:first-of-type {
      font-weight: bold;
    }
  }
  .mdi-trash-can-outline {
    cursor: pointer;
    margin-right: 0.5rem;
    font-size: 22px;
  }
}
</style>
