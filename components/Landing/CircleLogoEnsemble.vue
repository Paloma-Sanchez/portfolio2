<template>
    <div>
        <div
            class="w-[820px] h-[820px] border-2 border-[#BEBEBE] rounded-full relative-top-[410px] -right-[410px] -z-10"
        ></div>
        <landing-logo-group
            class="relative -top-44  left-28"
            :firstLogo="isDark? 'rounded-full': 'bg-white rounded-full'"
            secondLogo="mt-16 ml-14 rounded-sm"
            thirdLogo="mt-28 ml-16 rounded-sm"
        />
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