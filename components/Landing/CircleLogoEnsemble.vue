<template>
  <div class="overflow-hidden w-[200px] sm:w-[360px] xl:w-[410px] h-[410px]">
    <div class="-mt-[410px] -mr-[410px]">
      <div
        class="lg:animate-rotate65Up5 desktop:animate-rotate65Up0 -rotate-[65deg] w-[820px] h-[820px] ">
        <div class="w-[820px] h-[820px] border-2 border-[#BEBEBE] rounded-full ">
        </div>
        <landing-logo-group 
          class="relative -top-44  left-28 "
          :firstLogo="isDark ? 'rounded-full' : 'bg-white rounded-full'" secondLogo="mt-16 ml-14 rounded-sm"
          thirdLogo="mt-28 ml-16 rounded-sm bg-white " />
      </div>
    </div>

  </div>
</template>
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
