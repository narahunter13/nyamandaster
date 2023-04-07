import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/tabel-statis',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TabelStatisPage.vue') }],
  },
  {
    path: '/berita',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BeritaPage.vue') }],
  },
  {
    path: '/publikasi',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PublikasiPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
