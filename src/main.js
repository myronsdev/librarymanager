import { createApp } from 'vue'
import App from './App.vue'
import bookStore from '../src/store/BookStore'



const app = createApp(App).use(bookStore);
app.mount('#app')

