import './main.css';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Cart from './pages/Cart.vue';
import Favorites from './pages/Favorites.vue';
import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createApp } from 'vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/cart', name: 'Cart', component: Cart },
	{ path: '/favorites', name: 'Favorites', component: Favorites },
	{ path: '/profile', name: 'Profile', component: Profile },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);
app.use(router);
app.use(autoAnimatePlugin);
app.mount('#app');
