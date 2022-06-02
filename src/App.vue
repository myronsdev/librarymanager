<template>
  <div class="home">
    <div class="home__togglemode" @click="managerMode = !managerMode">toggle manager mode</div>
    <Header title="Book Titles" @openModal="modalIsOpen = true" />
    <Books :books="$store.state.books" @deleteBook="removeBook" @showDetails="showDetails" :managerMode="managerMode" @checkout="toggleMode"/>
    <BookModal :show="modalIsOpen" @addBook="addBook" @closeModal="closeModal" />
    <DetailsModal v-if="activeBook" :show="detailsModalIsOpen" :book="activeBook" @closeDetailsModal="detailsModalIsOpen = false" />
  </div>
</template>

<script>
import Header from "./components/CatalogHeader.vue";
import Books from "./components/Books.vue";
import BookModal from "./components/BookModal.vue";
import DetailsModal from './components/DetailsModal.vue'

export default {
  name: "App",
  components: {
    Header,
    Books,
    BookModal,
    DetailsModal
  },
  data() {
    return {
      modalIsOpen: false,
      detailsModalIsOpen: true,
      activeBook: null,
      managerMode: true
    };
  },
  methods: {
    addBook(book) {
      this.$store.commit("addBook", book);
      this.modalIsOpen = false;
    },
    removeBook(id) {
      this.$store.commit("removeBook", id);
    },
    closeModal() {
      this.modalIsOpen = false;
    },
    showDetails(id) {
      this.activeBook = this.$store.state.books.find(book => book.id === id);
      this.detailsModalIsOpen = true;
    },
    toggleMode(id) {
      this.$store.commit("toggleCheckout", id)
    }
  }
};
</script>

<style lang="scss">
.home {
  padding: 0 15rem;
  font-family: 'Poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  &__togglemode {
    cursor: pointer;
    font-size: 12px;
  };
}
</style>
