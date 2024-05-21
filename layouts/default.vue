<template>
    <div>
        <div
            class="flex justify-center"
        >
            <navbar/>

        </div>
        <div
            v-if="path === '/'"
            class="relative -z-10"
        >
            <landing-circle-logo-ensemble
                class="w-[820px] h-[820px] border-2 border-[#BEBEBE]  rounded-full absolute -top-[544px] left-3/4  lg:animate-rotate65Up15 xl:animate-rotate65Up5 desktop:animate-rotate65Up0 -rotate-[65deg]  "
            />
        </div>
    </div>

    <slot/>
</template>
<script setup lang="ts">
    const isOpen = ref(false);
    
    const path = computed(() => {
        const {fullPath} = useRoute()
        return fullPath
    }) 
</script>