<template>
  <Html

    :class="[
      {
        'bg-[#DCECFF]': $colorMode.preference === 'light' && path === '/',
        'bg-black': $colorMode.preference === 'dark'
      }
    ]"
  >
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </Html>
  
</template>

<script setup lang="ts">
    const path = computed(() => {
        const {fullPath} = useRoute();
        return fullPath
    }) 
    watch(path, () => {
      console.log('path', path)
    })
</script>