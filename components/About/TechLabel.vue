<template>
    <div
        data-aos="fade-up"
        class="px-8 py-4 rounded-3xl bg-blue-400 dark:bg-blue-500/20 backdrop-blur text-white dark:text-blue-400 w-auto mr-3 mb-3"
    >
        <p
            class="font-light"
        >
            {{ label }}
        </p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    }
})

</script>