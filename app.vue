<template>
  <Html
    class="overflow-hidden "
    :class="[
      {
        'bg-[#DCECFF]': $colorMode.preference === 'light',
        'bg-black': $colorMode.preference === 'dark'
      }
    ]"
  >
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </Html>
  
</template>

<script setup>

</script>