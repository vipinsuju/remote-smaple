import { createApp } from 'vue'
import App from './App.vue'
import PreviewComponent from "preview-component";

createApp(App).mount('#app')
App.use(PreviewComponent);
