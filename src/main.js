import './main.css';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Favorites from './pages/Favorites.vue';
import Home from './pages/Home.vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createApp } from 'vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/favorites', name: 'Favorites', component: Favorites },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).use(autoAnimatePlugin).mount('#app');
