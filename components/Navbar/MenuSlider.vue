<template>
    <navbar-burguer
        v-model="isOpen"
        @update:model-value="handleToggleMenu"
    />

</template>
<script setup lang="ts">
const isOpen = ref(false);

const handleToggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>