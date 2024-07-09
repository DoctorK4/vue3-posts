<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    ></PostFilter>
    <hr class="my-4" />

    <AppGrid :items="posts" col-class="col-4">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goPage(item.id)"
          @modal="openModal(item)"
        />
      </template>
    </AppGrid>
    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="page => (params._page = page)"
    />
    <Teleport to="#modal">
      <PostModal
        v-model="show"
        :title="modalTitle"
        :content="modalContent"
        :created-at="modalCreatedAt"
      />
    </Teleport>

    <template v-if="posts && posts.length > 0">
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';

import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import PostModal from '@/components/posts/PostModal.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppGrid from '@/components/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';

const router = useRouter();
const posts = ref([]);

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
});

// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);

const goPage = id => {
  // router.push(`/posts/${id}`);
  router.push({
    name: 'PostDetail',
    params: { id },
  });
};

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers['x-total-count'];
  } catch (error) {
    console.error(error);
  }
};

watchEffect(fetchPosts);
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');

const openModal = ({ title, content, createdAt }) => {
  show.value = true;
  modalTitle.value = title;
  modalContent.value = content;
  modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
