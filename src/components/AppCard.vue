<template>
  <div class="card">
    <div class="card-header">
      <slot v-if="$slots.header" name="header"></slot>
    </div>
    <div class="card-body">
      <slot v-if="$slots.default"></slot>
    </div>
    <div class="card-footer">
      <slot v-if="$slots.footer" name="footer"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
