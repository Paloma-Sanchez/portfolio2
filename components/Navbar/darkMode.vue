<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});
</script>
<template>
    <button
      aria-label="Theme"
      @click="isDark = !isDark"
    >
        <Icon
            :name="isDark ? 'heroicons:moon-20-solid' : 'heroicons:sun-20-solid'"
            class="mb-1 ml-4"
            :color="isDark ? '#E3F0FF' : '#1E1E1E'"
        />
    </button>
</template>