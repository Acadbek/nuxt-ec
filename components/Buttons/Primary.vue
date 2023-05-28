<template>
  <n-button :class="color" class="text-white">
    <slot></slot>
  </n-button>
</template>

<script setup>

defineProps(['color'])

</script>