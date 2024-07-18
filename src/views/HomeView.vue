<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <div class="row g-3">
      <AppGrid :items="items" v-slot="{ item }">
        <AppCard>{{ item }}</AppCard>
      </AppGrid>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
};
</script>

<script setup>
import { useRouter } from 'vue-router';
import { inject, ref } from 'vue';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);

const person = inject('person');
console.log(person.name, 'setup script');
</script>

<style lang="scss" scoped></style>
