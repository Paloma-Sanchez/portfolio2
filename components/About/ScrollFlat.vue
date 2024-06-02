<template>
  <div class="w-fit pl-20">
    <div class="flex flex-col items-center">
      <Icon
        :color="isDark?'#E3F0FF':'#1E1E1E'"
        name="material-symbols-light:arrow-cool-down"
        class="animate-[bounce_1500ms_linear_infinite] "
      />
      <div
        class="curved-text animate-pulse text-xs font-light text-[#1E1E1E] dark:text-[#E3F0FF]"
      >
        SCROLL DOWN
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
});
</script>