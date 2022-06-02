import { createStore } from 'vuex';
import {v4 as uuid }  from 'uuid';

const bookStore = createStore({
  state() {
    return {
      books: [
        {
          image: null,
          name: 'beginner',
          author: 'My McTy',
          year: '2022',
          genre: 'fiction',
          id: uuid(),
          available: true
        },
        {
          image: null,
          name: 'intermediate',
          author: 'My McTy',
          year: '2021',
          genre: 'science fiction',
          id: uuid(),
          available: true
        },
        {
          image: null,
          name: 'west arc',
          author: 'My McTy',
          year: '2012',
          genre: 'science fiction',
          id: uuid(),
          available: true
        },
        {
          image: null,
          name: 'ranger seth',
          author: 'My McTy',
          year: '2012',
          genre: 'science fiction',
          id: uuid(),
          available: true
        },
      ]
    }
  },
  mutations: {
    addBook(state, book) {
      state.books.push(book);
    },
    removeBook(state, id) {
      state.books = state.books.filter(book => book.id !== id);
    },
    toggleCheckout(state, id) {
     const book = state.books.find(book => book.id === id);
     book.available = !book.available;
    }
  }
})

export default bookStore