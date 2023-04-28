import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'ServiceActions',
		path: '/:category/actions',
		component: () => import('@/views/Service/Actions.vue'),
		props: true
	},
	{
		name: 'FormLoaders',
		path: '/form/loaders',
		component: () => import('@/views/Service/Order/Form/Loaders.vue')
	},
	{
		name: 'HistoryLoaders',
		path: '/history/loaders',
		component: () => import('@/views/Service/Order/History/Loaders.vue')
	},
	{
		name: 'InfoLoaders',
		path: '/info/loaders',
		component: () => import('@/views/Service/Order/Information/Loaders.vue')
	},
	{
		name: 'InfoDelivery',
		path: '/info/delivery',
		component: () => import('@/views/Service/Order/Information/Delivery.vue')
	},
	{
		name: 'InfoTrash',
		path: '/info/trash',
		component: () => import('@/views/Service/Order/Information/Trash.vue')
	},
	{
		name: 'InfoHandyman',
		path: '/info/handyman',
		component: () => import('@/views/Service/Order/Information/Handyman.vue')
	},
	{
		name: 'Finish',
		path: '/form/finish',
		component: () => import('@/views/Service/Order/Form/Finish.vue')
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
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
