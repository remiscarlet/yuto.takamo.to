import { RouterOptions } from 'vue-router';

import PageContent from './Components/PageContent.vue';

const routes: RouterOptions = {
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: PageContent,
      props: { page: 'home' },
    },
    {
      path: '/tech',
      component: PageContent,
      props: { page: 'mytech' },
    },
    {
      path: '/projects',
      component: PageContent,
      props: { page: 'projects' },
    },
  ],
};

export default routes;
