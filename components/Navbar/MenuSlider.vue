<template>
    <div
    >
        <navbar-burguer
            v-model="isOpen"
            @update:model-value="handleToggleMenu"
        />
    </div>

</template>
<script setup lang="ts">
const isOpen = ref(false);

const handleToggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>