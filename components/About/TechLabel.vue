<template>
    <div
        class="px-4 py-6 rounded-md "
    >
        <p>
            {{ text }}
        </p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>