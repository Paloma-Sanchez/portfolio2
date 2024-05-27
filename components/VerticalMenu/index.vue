<template>
    <button
        class="flex justify-start w-fit ml-8 mt-10 mb-20"
        type="button"
        @click="handleBackArrowClick"
    >
        <Icon
            name="ic:baseline-arrow-back"
            :color="isDark ? '#E3F0FF' : '#1E1E1E'"
        />
    </button>
    <navbar-button-group
        :dividers="false"
        class="flex flex-col items-center mx-auto mb-40 text-4xl h-56 justify-between"
        @click="handleBackArrowClick"
    />
    <div
        class="flex items-center justify-end mr-14"
    >
        <navbar-dark-mode
            class="mr-5"
        />
        <navbar-switch-language/>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const emit = defineEmits(['closeSlideOver'])

const handleBackArrowClick = () => {
    emit('closeSlideOver')
} 

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});
</script>