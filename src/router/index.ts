import { ComponentPublicInstance } from 'vue';
import {
  createRouter,
  createWebHistory,
  NavigationFailure,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  RouteLocationRaw,
  Router,
  RouteRecordNormalized,
} from 'vue-router';
import { sync } from 'vuex-router-sync';

import store from '@/store';
import log from '@/log';

import { routes } from './routes';

interface ScrollPositionElement extends ScrollToOptions {
  el: string | Element;
}

type ScrollPositionCoordinates = {
  behavior?: ScrollOptions['behavior'];
  left?: number;
  top?: number;
};

type NavigationGuardNextCallback = (vm: ComponentPublicInstance) => any;
type NavigationGuardReturn = void | Error | RouteLocationRaw | boolean | NavigationGuardNextCallback;

// async function pipeline(
//     to: RouteLocationNormalized,
//     from: RouteLocationNormalized,
//     next: NavigationGuardNext,
//     middlewares: NavigationGuardNext[],
//     index: number
// ): Promise<any> {
//   return middlewares[index] ? async () => await middlewares[index](to, from, await pipeline(to, from, next, middlewares, index + 1)) : next;
// }

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  async scrollBehavior(
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    savedPosition: ScrollPositionCoordinates | null
  ): Promise<ScrollPositionCoordinates | ScrollPositionElement | false | void> {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { el: to.hash };
    }
    const [component]: RouteRecordNormalized[] = to.matched;

    if (component.meta.scrollToTop) {
      return { left: 0, top: 0 };
    }
  },
});

// async function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): Promise<NavigationGuardReturn> {
//   log.log('beforeEach to', to, 'from', from);
//
//   const middlewares: NavigationGuardNext[] = to?.meta?.middlewares || [];
//
//   return middlewares?.length ? await middlewares[0](to, from, pipeline(to, from, next, middlewares, 1)) : await next();
// }
//
// async function afterEach(to: RouteLocationNormalized, from: RouteLocationNormalized, failure?: NavigationFailure | void): Promise<void> {
//   log.log('afterEach to', to, 'from', from, 'failure', failure);
// }
//
// router.beforeEach(beforeEach);
// router.afterEach(afterEach);

sync(store, router);

export default router;
