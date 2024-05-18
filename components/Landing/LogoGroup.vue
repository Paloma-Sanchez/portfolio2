<template>
    <div
        class="flex "
        :class="flexClass"
    >
        <div
            class="relative"
        >
            <div
                class="rounded-full w-8 h-8 bg-white dark:bg-[#1E1E1E] absolute -z-10"
            ></div>
            <Icon
                name="simple-icons:github"
                :color="isDark? 'white':'#1E1E1E'"
            />
        </div>

        <Icon
            name="ph:medium-logo-fill"
            :color="isDark? '#1E1E1E' : 'white'"
            class="bg-[#1E1E1E]  dark:bg-[#E3F0FF] rounded-sm"
            :class="secondLogo"
        />
        <Icon
            name="fa6-brands:linkedin"
            color="#1E1E1E dark:white"
            class="bg-white  dark:bg-[#E3F0FF] rounded-sm"
            :class="thirdLogo"
        />
    </div>

</template>
<script setup lang="ts">
const colorMode = useColorMode();
const props = defineProps({
    flexClass: {
        type:String
    },
    secondLogo:{
        type:String
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