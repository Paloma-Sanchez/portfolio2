<template>
    <div
        class="flex "
        :class="flexClass"
    >

            <Icon
                name="simple-icons:github"
                class="animate-firstDot opacity-0"
                :class="firstLogo"
                :color="isDark? 'white':'#1E1E1E'"
                :width="iconsSize"
                :height="iconsSize"
            />


        <Icon
            name="ph:medium-logo-fill"
            :color="isDark? '#1E1E1E' : 'white'"
            class="bg-[#1E1E1E]  dark:bg-[#E3F0FF] opacity-0 animate-secondDot"
            :class="secondLogo"
            :width="iconsSize"
            :height="iconsSize"
        />
        <Icon
            name="fa6-brands:linkedin"
            color="#1E1E1E dark:white "
            class=" dark:bg-[#E3F0FF] opacity-0 animate-thirdDot"
            :class="thirdLogo"
            :width="iconsSize"
            :height="iconsSize"
        />
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