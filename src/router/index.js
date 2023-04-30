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
		path: '/:service/actions',
		component: () => import('@/views/Services/Order/Actions.vue'),
		props: true
	},
	{
		name: 'HandymanCategories',
		path: '/handyman/categories',
		component: () => import('@/views/Services/Handyman/Categories.vue'),
		props: true
	},


	{
		name: 'FormLoaders',
		path: '/form/loaders',
		component: () => import('@/views/Services/Order/Form/Loaders.vue')
	},
	{
		name: 'FormDecorators',
		path: '/handyman/form/decorators',
		component: () => import('@/views/Services/Order/Form/Handyman/Decorators.vue')
	},
	{
		name: 'FormHandyman',
		path: '/handyman/form/handyman',
		component: () => import('@/views/Services/Order/Form/Handyman/Others.vue')
	},


	{
		name: 'HistoryLoaders',
		path: '/history/loaders',
		component: () => import('@/views/Services/Order/History/Loaders.vue')
	},


	{
		name: 'InfoLoaders',
		path: '/info/loaders',
		component: () => import('@/views/Services/Order/Information/Loaders.vue')
	},
	{
		name: 'InfoDelivery',
		path: '/info/delivery',
		component: () => import('@/views/Services/Order/Information/Delivery.vue')
	},
	{
		name: 'InfoTrash',
		path: '/info/trash',
		component: () => import('@/views/Services/Order/Information/Trash.vue')
	},
	{
		name: 'InfoHandyman',
		path: '/info/handyman',
		component: () => import('@/views/Services/Order/Information/Handyman.vue')
	},


	{
		name: 'Finish',
		path: '/form/finish',
		component: () => import('@/views/Services/Order/Form/Finish.vue')
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
