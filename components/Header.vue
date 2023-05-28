<template>
  <n-config-provider class="flex w-full !justify-between container mx-auto items-center"
    :theme-overrides="themeOverrides">
    <p class="text-3xl font-extrabold font-mono">LOGO</p>
    <div class="flex items-center">
      <n-input class="!w-[421px]" v-model:value="inputValue" type="text" placeholder="Search" />
      <n-select class="w-[145px]" v-model:value="value" :options="options" />
      <ButtonsPrimary color="bg-blue-700">Search</ButtonsPrimary>
    </div>
    <div class="flex-center gap-4">
      <div class="flex-column gap-2">
        <Icons name="user" />
        <p>Profile</p>
      </div>

      <div class="flex-column gap-2">
        <Icons name="message" />
        <p>Message</p>
      </div>

      <div class="flex-column gap-2">
        <Icons name="heart" />
        <p>Orders</p>
      </div>

      <div class="flex-column gap-2">
        <Icons name="cart" />
        <p>My cart</p>
      </div>
    </div>
    <button @click="emitEvent">emit</button>
  </n-config-provider>
</template>

<script setup>
import { defineEmits } from 'vue'
import { ref } from 'vue'
import { NConfigProvider } from "naive-ui";

const value = ref(null);
const inputValue = ref(null);

defineEmits(['my-event'])

const emitEvent = () => {
  $emit('my-event');
}

const themeOverrides = {
  common: {
    baseColor: "white",
    primaryColor: "#0B75FF",
    primaryColorHover: "#0B75FF",
    primaryColorPressed: "#fff",
    borderColor: "#0B75FF",
    cardColor: "red",
  },
  Button: {
    textColor: "red",
    colorFocus: "red",
    colorHoverPrimary: "blue",
    colorHover: "",
    color: "#0B75FF",
  },
};

const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
]

</script>

<style lang="scss" scoped></style>