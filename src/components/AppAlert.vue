<template>
  <div v-if="show" class="alert alert-success app-alert" role="alert">
    수정이 완료되었습니다!
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
