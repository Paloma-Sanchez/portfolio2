<template>
    <div
        class="px-4 py-6 rounded-md bg-slate-400 dark:bg-slate-900 w-auto mr-3 mb-3"
    >
        <p>
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