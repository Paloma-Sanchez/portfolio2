<template>
    <div
        class="flex items-center justify-end sm:justify-around h-[72px] sm:h-[102px] w-[95%] text-[#1E1E1E] bg-[#E3F0FF] dark:bg-[#1E1E1E] rounded-[35px] mt-3 sm:mt-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_4px_4px_rgba(252,252,252,0.25)]"
    >
        <div
            class="flex w-1/2 sm:w-auto justify-between items-center pr-8"
        >
            <NuxtLink
                to="/"
                class="cursor-pointer fill-[#1E1E1E] dark:fill-white"
            >
                <logo
                    class=" "
                />
            </NuxtLink>
            <navbar-burguer
                v-model="isOpen"
                class="sm:hidden block"
                @update:modelValue="handleToggleBurguer"
            />
        </div>
        <div>
            <navbar-button-group
                class="hidden sm:flex items-center justify-between text-xl h-min"
            />
        </div>
        <div
            class="sm:flex items-center hidden "
        >
            <navbar-switch-language/>
            <navbar-dark-mode/>
        </div>     
    </div>
    
</template>
<script setup lang="ts">
import Logo from '../../assets/svg/logo.svg'
const isOpen = ref(false);
const emit = defineEmits(['toggleAppearSlideOver']);

const handleToggleBurguer = () => {
    emit('toggleAppearSlideOver');
};

const closeNavbarBurguer = () => {
    isOpen.value = !isOpen.value
};

defineExpose({
    closeNavbarBurguer
});

</script>
<style >
    .nuxt-icon--fill {
        fill: inherit;
    }
    .nuxt-icon--fill * {
        fill: inherit;

    }
    .router-link-exact-active {
        font-weight: 700;
    }
</style>