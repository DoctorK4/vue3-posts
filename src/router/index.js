import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';

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
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView,
    name: 'PostEdit',
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
