<template>
    <div
        class="flex justify-end p-4 mb-8 mx-8  w-fit rounded-md flex-wrap"
    >
        <about-tech-label
            v-for="label in labelArray"
            :label="label"
        />

    </div>

</template>
<script setup lang="ts">
const props = defineProps({
    labelArray: {
        type: Array,
        required: true
    }
})
</script>