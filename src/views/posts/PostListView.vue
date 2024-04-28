<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" class="col-4" :key="post.id">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
      <AppCard>
        <PostDetailView :id="2"></PostDetailView>
      </AppCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';

const router = useRouter();
const posts = ref([]);

const goPage = id => {
  // router.push(`/posts/${id}`);
  router.push({
    name: 'PostDetail',
    params: { id },
  });
};

const fetchPosts = () => {
  posts.value = getPosts();
};

fetchPosts();
</script>

<style lang="scss" scoped></style>
