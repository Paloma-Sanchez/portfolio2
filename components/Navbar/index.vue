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
            <navbar-menu-slider
                class="sm:hidden block"
            />
        </div>
        <div>
            <navbar-button-group/>
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