<template>
    <div
        class="hidden sm:flex items-center justify-between h-min w-[270px] md:w-[540px] text-[#1E1E1E] dark:text-[#E3F0FF] font-Almarai text-xl font-light"
    >
        <NuxtLink

            class="cursor-pointer  "
        >
            {{ $t("navbar.cat1")}}
        </NuxtLink>
        <p
            class=" text-lg "
        > / </p>
        <NuxtLink
            to="/projects"
            class="cursor-pointer"
        >
            {{ $t("navbar.cat2")}}
        </NuxtLink>
        <p
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
