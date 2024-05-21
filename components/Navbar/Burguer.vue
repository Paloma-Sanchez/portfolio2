<template>
    <div
        @click="setOpen"
        class="cursor-pointer h-max relative top-1 right-2 p-1"
    >
        <div
            class="h-[2px] w-5 bg-black mb-1 transition-all absolute top-1 right-1"
            :class="[ 
                isDark?'bg-white':'bg-[#1E1E1E]',
                {
                    'transform scale-0': modelValue === true
                }
            ]"
        ></div>
        <div
            class="h-[2px] w-5 bg-black mb-1 transition-all absolute right-1"
            :class="[
                isDark?'bg-white':'bg-[#1E1E1E]',
                {
                    'transform rotate-45': modelValue === true,
                    'transform scale-110': modelValue === true,
                    'top-0' : modelValue !== true,
                    'top-1/2': modelValue === true
                }
            ]"
        ></div>
        <div
            class="h-[2px] w-5 bg-black transition-all absolute -top-1 right-1"
            :class="[
                isDark?'bg-white':'bg-[#1E1E1E]',
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
const colorMode = useColorMode();
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});

const props = defineProps ({
    modelValue:{
        type:Boolean,
        default:false
    }
});

const emit = defineEmits(['update:modelValue'])
const setOpen = () => {
    emit('update:modelValue', !props.modelValue)
};

</script>
