<template>
    <h1
        class="bg-gradient-to-b from-white dark:to-black to-[#3B4856] bg-clip-text text-transparent uppercase text-[70px] sm:text-[124px] md:text-[150px] lg:text-[202px] xl:text-[252px] desktop:text-[264px] font-bold text-center mt-16 sm:mt-16 md:mt-8 lg:mt-4 opacity-0 animate-slideUpImmediate  ">
        {{ $t("about.title") }}
    </h1>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        
    }
})
</script>