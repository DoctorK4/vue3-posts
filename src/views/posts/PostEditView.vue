<template>
  <div>
    <h2>게시글 수정</h2>
    <hr />
    <PostForm
      @submit.prevent="edit"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
    <AppAlert :items="alerts" />
  </div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data);
  } catch (error) {
    console.error(error);
    vAlert(error.message);
  }
};

const setForm = ({ title, content, createdAt }) => {
  form.value.title = title;
  form.value.content = content;
  form.value.createdAt = createdAt;
};

fetchPost();

const edit = async () => {
  try {
    await updatePost(id, {
      ...form.value,
    });
    vAlert('수정이 완료되었습니다.', 'success');
    // await router.push({
    //   name: 'PostDetail',
    //   params: { id },
    // });
  } catch (error) {
    console.error(error);
    vAlert(error.message);
  }
};

const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: { id },
  });
};

const alerts = ref([]);
const vAlert = (message, type = 'error') => {
  alerts.value.push({ message, type });
  setTimeout(() => {
    alerts.value.shift();
  }, 2000);
};
</script>
