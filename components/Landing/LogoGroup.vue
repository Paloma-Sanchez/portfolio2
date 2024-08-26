<template>
    <div
        class="flex "
        :class="flexClass"
    >
        <NuxtLink
            to="https://github.com/Paloma-Sanchez"
            class="w-8 h-8"
        >
            <div
                class=" cursor-pointer relative z-50"
            >
                <Icon
                    name="simple-icons:github"
                    class="animate-firstDot opacity-0 "
                    :class="firstLogo"
                    :color="isDark? 'white':'#1E1E1E'"
                    :width="iconsSize"
                    :height="iconsSize"
                />
            </div>

        </NuxtLink>
        <NuxtLink
            to="https://medium.com/@karpaloma/"
            class="relative z-50 w-8 h-8"
                :class="secondLogo"

        >
            <Icon
                name="ph:medium-logo-fill"
                :color="isDark? '#1E1E1E' : 'white'"
                class="bg-[#1E1E1E]  dark:bg-[#E3F0FF] opacity-0 animate-secondDot cursor-pointer"
                :width="iconsSize"
                :height="iconsSize"
            />
        </NuxtLink>
        <NuxtLink
            to="www.linkedin.com/in/paloma-sanchez-developer"
            class="relative z-50 w-8 h-8"
                :class="thirdLogo"
        >
            <Icon
                name="fa6-brands:linkedin"
                color="#1E1E1E dark:white "
                class=" dark:bg-[#E3F0FF] opacity-0 animate-thirdDot cursor-pointer"
                :width="iconsSize"
                :height="iconsSize"
            />
        </NuxtLink>
    </div>

</template>
<script setup lang="ts">
const colorMode = useColorMode();
const props = defineProps({
    animate: {
        type:Boolean,
        default:false
    },
    firstLogo: {
        type:String
    },
    flexClass: {
        type:String
    },
    secondLogo:{
        type:String
    },
    iconsSize:{
        type:String,
        default:'32px'
    },
    thirdLogo:{
        type:String
    }
})

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
  });
</script>