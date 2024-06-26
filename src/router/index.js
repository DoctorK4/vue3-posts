import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFound/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home',
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about',
  },
  {
    path: '/posts',
    component: PostListView,
    name: 'PostList',
  },
  {
    path: '/posts/create',
    component: PostCreateView,
    name: 'PostCreate',
  },
  {
    path: '/posts/:id',
    component: PostDetailView,
    name: 'PostDetail',
    // props: route => ({ id: parseInt(route.params.id) }),
    props: true,
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView,
    name: 'PostEdit',
  },
  {
    path: '/nested',
    component: NestedView,
    name: 'Nested',
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
