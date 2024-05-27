<template>
    <div>
        <div
            class="flex justify-center"
        >
            <navbar
                @toggle-appear-slide-over="handleToggleAppearSlide"
                ref="navbarInstance"
            />
            <navbar-slide-over
                v-model="isShowSlideOver"
                side="left"
                @close="closeBurguer"
            >
                <vertical-menu
                    @close-slide-over="closeAll"
                />
            </navbar-slide-over>
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
const isShowSlideOver = ref(false);
const navbarInstance:object | null = ref(null);

const closeBurguer = () => {
    navbarInstance.value.closeNavbarBurguer();
};

const handleToggleAppearSlide = () => {
    isShowSlideOver.value = !isShowSlideOver.value
};

const closeAll = () => {
    handleToggleAppearSlide();
    closeBurguer();
}

const path = computed(() => {
    const {fullPath} = useRoute()
    return fullPath
}) 
</script>