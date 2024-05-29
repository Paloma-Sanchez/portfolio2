<template>
    <div
        class=" w-[270px] md:w-[540px] text-[#1E1E1E] dark:text-[#E3F0FF] font-Almarai font-light"
        :class="class"
    >
        <NuxtLink
            to="/about"
            class="cursor-pointer  "
        >
            {{ $t("navbar.cat1")}}
        </NuxtLink>
        <p
            v-if="dividers"
            class=" text-lg "
        > / </p>
        <NuxtLink
            to="/projects"
            class="cursor-pointer"
        >
            {{ $t("navbar.cat2")}}
        </NuxtLink>
        <p
            v-if="dividers"
            class=" text-lg "
        > / </p>
        <NuxtLink
            to="/contact"
            class="cursor-pointer"
        >
            {{ $t("navbar.cat3")}}
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        class:{
            type:String,
            default:''
        },
        dividers:{
            type:Boolean,
            default:true
        }
    })
</script>
