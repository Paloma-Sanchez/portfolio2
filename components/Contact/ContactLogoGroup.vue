<template>
    <landing-logo-group
        iconsSize="32px"
        flex-class="items-center w-40 justify-between"
        first-logo="rounded-full"
        second-logo="rounded-full"
        third-logo="bg-transparent rounded-full"
        :animate="true"
    />
    <div
        class="relative -z-10"
    >
        <div
            v-if="bg"
            class="flex items-center w-[104px] justify-between absolute -top-7 -left-[52px] "
        >
            <div
                class="w-8 h-8 bg-white rounded-full "
            ></div>
            <div
                class="w-8 h-8 bg-white rounded-full"
            ></div>
            <div
                class="w-8 h-8 bg-white rounded-full"
            ></div>
            
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    bg:{
        type:Boolean,
        default:false
    }
})
</script>
