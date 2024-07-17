import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import fnPlugin from './plugins/func';
import objPlugin from './plugins/obj';
import person from './plugins/person';

const app = createApp(App);

app.use(fnPlugin);
app.use(objPlugin, { msg: 'Hello from objPlugin' });
app.use(router);
app.use(person, { name: '김동률' });
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
