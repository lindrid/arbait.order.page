import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'About',
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		name: 'Blank',
		path: '/blank',
		component: () => import('@/views/Blank.vue')
	},
	{
		name: 'ServiceActions',
		path: '/:category/actions',
		component: () => import('@/views/Service/Actions.vue'),
		props: true
	},
	{
		name: 'FormLoaders',
		path: '/service/order/form/loaders',
		component: () => import('@/views/Service/Order/Form/Loaders.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
