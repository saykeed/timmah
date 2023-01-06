
import { createRouter, createWebHistory, useRouter } from 'vue-router'


const routes = [
	{
		path: '/',
		component: () => import('../views/home.vue')
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

// router.beforeEach((to) => {
// 	if (!isAuthenticated() && to.meta.requiresAuth) {
// 		return { name: 'Signin' }
// 	}
// })




export default router
