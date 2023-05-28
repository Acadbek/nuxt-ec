<template>
  <Header @my-event="handleEmit" />
  <main>
    <slot></slot>
  </main>
  <Footer />
</template>

<script setup>
const handleEmit = () => {
  console.log('hello emit');
}
</script>