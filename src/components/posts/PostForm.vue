<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"> 제목 </label>
        <input
          @input="$emit('update:title', $event.target.value)"
          type="text"
          class="form-control"
          :value="title"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          내용</label
        >
        <textarea
          @input="$emit('update:content', $event.target.value)"
          class="form-control"
          id="contents"
          :value="content"
          rows="3"
        ></textarea>
      </div>
      <div class="d-flex gap-2 mt-4">
        <slot name="actions"></slot>
      </div>
    </form>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});
defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
