<template>
  <div>
    <AppCard>
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
      <p class="text-muted">{{ createdAt }}</p>
      <template #footer>
        <div class="d-flex flex-row-reverse">
          <button class="btn p-0" @click.stop="$emit('modal')">
            <i class="bi bi-emoji-smile"></i>
          </button>
        </div>
      </template>
    </AppCard>
  </div>
</template>

<script setup>
import AppCard from '../app/AppCard.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});
</script>

<style lang="scss" scoped></style>
