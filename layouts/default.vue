<template>
    <div>
        <div
            class="flex justify-center"
        >
            <navbar
                @toggle-appear-slide-over="handleToggleAppearSlide"
                ref="navbarInstance"
                class="relative z-10"
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
            class="relative "
        >
            <landing-circle-logo-ensemble
                class="absolute -top-[164px] sm:-top-[134px] right-0 "
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