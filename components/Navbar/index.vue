<template>
    <div
        class="flex items-center justify-around h-[102px] w-[95%] text-[#1E1E1E] bg-[#E3F0FF] dark:bg-[#1E1E1E] rounded-[35px] mt-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_4px_4px_rgba(252,252,252,0.25)]"
    >
        <NuxtLink
            to="/"
            class="cursor-pointer fill-[#1E1E1E] dark:fill-white"
        >
            <logo
                class=" "
            />
        </NuxtLink>
        <navbar-button-group/>
        <div
            class="flex items-center"
        >
            <p>EN</p>
            <navbar-dark-mode/>
        </div>     
    </div>
    
</template>
<script setup lang="ts">
import Logo from '../../assets/svg/logo.svg'
</script>
<style >
    .nuxt-icon--fill {
        fill: inherit;
    }
    .nuxt-icon--fill * {
        fill: inherit;

    }
</style>