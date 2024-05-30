<template>
    <about-tech-label-group
        v-for="label in labelArray"
        :label="label"
    />
</template>
<script setup lang="ts">
const props = defineProps({
    labelArray: {
        type: Array,
        required: true
    }
})
</script>