import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [
  {
    // will match everything
    path: '/',
    layout: "index",
    meta: {
      layoutClass: 'index',
    },
    component: () => import('../views/index'),
  },
  {
    // will match everything
    path: '*',
    layout: "404",
    meta: {
      layoutClass: '404',
    },
    component: () => import('../views/404'),
  }
];

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
  route.meta = route.meta || {} ;
  route.meta.layout = route.layout || parentLayout ;

  if( route.children )
  {
    route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
  }
  return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if ( to.hash ) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
    return {
      x: 0,
      y: 0,
      behavior: 'smooth',
    }
  }
})

export default router

