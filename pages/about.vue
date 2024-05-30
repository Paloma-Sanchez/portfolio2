<template>
    <main>
        <div class="h-[85vh] ">
            <h1
                class="bg-gradient-to-b from-white dark:to-black to-[#3B4856] bg-clip-text text-transparent uppercase text-[70px] sm:text-[124px] md:text-[150px] lg:text-[202px] xl:text-[252px] desktop:text-[264px] font-bold text-center mt-16 sm:mt-16 md:mt-8 lg:mt-4 opacity-0 animate-slideUpImmediate  "
            >
                {{ $t("about.title") }}
            </h1>
            <div class=" flex justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 max-w-[1352px]">
                    <div
                        class="mx-auto  sm:col-start-2 flex-col items-center md:items-end mt-12 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-12 desktop:mt-4 w-9/12 opacity-0 animate-slideUp400Delay ">
                        <p
                            class="  text-center sm:text-left text-base sm:text-lg md:text-xl dark:text-white font-light ">
                            I'm Paloma a french Frontend Focused Web Developer building and managing the Front-end of
                            Websites and
                            Web Applications that lead to the success of the overall product.
                            <br class="mb-5" />
                            I also like creating technical articles on Medium so it can help other people in the
                            Developper
                            Community.
                            <br class="mb-4" />
                            I'm open to Job opportunities where I can contribute, learn and grow.
                        </p>

                    </div>
                </div>
            </div>
        </div>

        <h2 class="text-2xl mr-56 w-1/2 dark:text-white ">
            Technologies
        </h2>
        <about-tech-label-group/>

    </main>
</template>
<script setup lang="ts">
const technologiesArray = [
    'HTML & CSS',
    'Vue.js',
    'JavaScript',
    'Nuxt.js',
    'Node.js',
    'Docker',
    'Redis',
    'Typescript',
    'Tailwind',
        
    ]
</script>
