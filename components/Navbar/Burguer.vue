<template>
    <div
        @click="setOpen"
        class="cursor-pointer h-max relative -top-1 right-2"
    >
        <div
            class="h-[2px] w-5 bg-black mb-1 transition-all absolute top-1"
            :class="[
                {
                    'transform scale-0': modelValue === true
                }
            ]"
        ></div>
        <div
            class="h-[2px] w-5 bg-black mb-1 transition-all absolute  "
            :class="[
                {
                    'transform rotate-45': modelValue === true,
                    'transform scale-110': modelValue === true,
                    'top-0' : modelValue !== true,
                    'top-1/2': modelValue === true
                }
            ]"
        ></div>
        <div
            class="h-[2px] w-5 bg-black transition-all absolute -top-1"
            :class="[
                {
                    'transform rotate-[-230deg]': modelValue === true,
                    'transform scale-110': modelValue === true,
                    '-top-1' : modelValue !== true,
                    'top-1/2': modelValue === true
                }
            ]"
        ></div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps ({
    modelValue:{
        type:Boolean,
        default:false
    }
});

const emit = defineEmits(['update:modelValue'])
const setOpen = () => {
    emit('update:modelValue', props.modelValue)
}
</script>
<style>

</style>