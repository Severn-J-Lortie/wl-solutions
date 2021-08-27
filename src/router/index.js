import { createRouter, createWebHistory } from 'vue-router'

import { getCurrentUser } from '../Firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/SuccessMessage.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




// Navigation gaurd to prevent unauthorized users from entering admin page
router.beforeEach(async (to, from, next) => {

  if (to.name === 'Admin') {
    // Get the current user
    try {
      // Will throw if there is an error or the user is not logged in
      await getCurrentUser();
      next();
    } catch(err) {
      next('/login');
    }
    
  } else {
    next();
  }

})


export default router
