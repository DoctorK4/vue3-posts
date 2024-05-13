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
    <AppAlert :show="showAlert" />
  </div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
    vAlert();
    // await router.push({
    //   name: 'PostDetail',
    //   params: { id },
    // });
  } catch (error) {
    console.error(error);
  }
};

const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: { id },
  });
};

//alert
const showAlert = ref(false);
const vAlert = () => {
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};
</script>
