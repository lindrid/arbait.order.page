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
		name: 'ServiceCategoryActions',
		path: '/:service/:category/actions',
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
		name: 'FormLoader',
		path: '/form/loader',
		component: () => import('@/views/Services/Order/Form/Loader.vue')
	},
	{
		name: 'FormDecorator',
		path: '/form/decorator',
		component: () => import('@/views/Services/Order/Form/Handyman/Decorator.vue')
	},
	{
		name: 'FormHandyman',
		path: '/form/handyman/other/:appId',
		component: () => import('@/views/Services/Order/Form/Handyman/Other.vue'),
		props: true
	},
	{
		name: 'FormHandyman',
		path: '/form/handyman/other',
		component: () => import('@/views/Services/Order/Form/Handyman/Other.vue'),
		props: true
	},
	{
		name: 'FormHandyman',
		path: '/form/handyman/other/:appId',
		component: () => import('@/views/Services/Order/Form/Handyman/Other.vue'),
		props: true
	},

	{
		path: '/history/:service',
		component: () => import('@/views/Services/Order/History.vue'),
		props: true
	},
	{
		path: '/history/:service/:category',
		component: () => import('@/views/Services/Order/History.vue'),
		props: true
	},

	{
		name: 'InfoLoader',
		path: '/info/loader',
		component: () => import('@/views/Services/Order/Information/Loader.vue')
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
