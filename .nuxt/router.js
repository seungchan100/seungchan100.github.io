import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _af462720 = () => interopDefault(import('..\\pages\\blog_home.vue' /* webpackChunkName: "pages/blog_home" */))
const _3de5abd4 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _75db888a = () => interopDefault(import('..\\pages\\products\\simpleLedger.vue' /* webpackChunkName: "pages/products/simpleLedger" */))
const _b613d634 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _99e335d6 = () => interopDefault(import('..\\pages\\_blog.vue' /* webpackChunkName: "pages/_blog" */))
const _2f96bb88 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog_home",
    component: _af462720,
    name: "blog_home"
  }, {
    path: "/projects",
    component: _3de5abd4,
    name: "projects"
  }, {
    path: "/products/simpleLedger",
    component: _75db888a,
    name: "products-simpleLedger"
  }, {
    path: "/",
    component: _b613d634,
    name: "index"
  }, {
    path: "/:blog",
    component: _99e335d6,
    name: "blog",
    children: [{
      path: ":slug?",
      component: _2f96bb88,
      name: "blog-slug"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
