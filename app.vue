<template>
  <Html
    :class="[
      {
        'bg-[#DCECFF]': $colorMode.value === 'light' && path === '/',
        'bg-black': $colorMode.value === 'dark'
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

</script>


