<template>
<main 
    class=" "
>

    <div
        class="relative"
    >
        
    </div>
    <div
        class="w-[250px] h-[250px] sm:w-[363px] sm:h-[363px] rounded-full bg-white/95 dark:bg-[#E3F0FF] overflow-hidden mx-auto sm:ml-[37%] mt-14  sm:mt-20 pr-7 animate-slidePictureUp "
    >
        <img 
            class="mt-6 ml-8"
            src="../../assets/images/Picture.png" 
            alt=""
        />
    </div>
    <div
        class="relative animate-slideUp opacity-0"
    >
        <landing-title-text
            class="absolute sm:right-[60%] desktop:right-1/4 sm:-top-[350px]   desktop:-top-48 hidden sm:block"
        />
    </div>
    
    <p
        class="font-kannadaFake text-transform: uppercase text-6xl sm:text-[140px] text-center text-[#1E1E1E] dark:text-[#E3F0FF] mb-12  sm:mb-24 mt-10 sm:-mt-10 animate-slideUp opacity-0 mx-4"
    >
        paloma sanchez
    </p>
    <p
        class="text-center text-[#1E1E1E] dark:text-[#E3F0FF] font-Almarai  animate-slideMailUp opacity-0"
    >
        karenpaloma.sanchez@gmail.com
    </p>
    <p
        class=" block sm:hidden ext-lg font-light font-Almarai text-[#2F399E] dark:text-white text-center mt-12"
    >
        Feelance Frontend Developper
    </p>
</main>
</template>
<script setup lang="ts">
</script>
<style >
    .nuxt-icon--fill {
        fill: inherit;
    }
    .nuxt-icon--fill * {
        fill: inherit;

    }
</style>