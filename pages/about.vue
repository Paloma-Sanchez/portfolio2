<template>
    <main>
        <div 
            class="h-[83vh] xl:h-[80vh] flex flex-col justify-between "
            :class="[

                ]"
        >
            <div>
                <h1
                class="bg-gradient-to-b from-white dark:to-black to-[#3B4856] bg-clip-text text-transparent uppercase text-[70px] sm:text-[124px] md:text-[150px] lg:text-[202px] xl:text-[252px] desktop:text-[264px] font-bold text-center mt-16 sm:mt-16 md:mt-8 lg:mt-4 opacity-0 animate-slideUpImmediate  ">
                {{ $t("about.title") }}
            </h1>
            <div class=" flex justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 max-w-[1352px]">
                    <div
                        class="mx-auto  sm:col-start-2 flex-col items-center md:items-end mt-12 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-12 desktop:mt-4 w-9/12 opacity-0 animate-slideUp400Delay ">
                        <p
                            class="text-center sm:text-left text-base sm:text-lg md:text-xl text-[#1E1E1E] dark:text-[#E3F0FF]  font-light font-Archivo ">
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
            
            <about-scroll-flat 
                class="mb-20 sm:mb-0 mx-auto sm:ml-20"
                :class="[
                    {
                        'hidden':hiddenScroll
                    }
                ]"
            />
        </div>
        <div
            class=" h-[90vh] "
        >
                <div class=" flex justify-center mb-8">
            <div class="grid grid-cols-1 md:grid-cols-3 min-w-[80%] max-w-[1352px]">
                <h2 data-aos="fade-up"
                    class="text-center  uppercase  sm:ml-16  sm:mr-3 mb-16 sm:mb-20 sm:col-start-2 col-span-2  bg-gradient-to-b from-white dark:to-black to-[#3B4856] bg-clip-text text-transparent text-4xl sm:text-6xl lg:text-[74px] xl:text-[100px] font-bold ">
                    Technologies
                </h2>
                <div class="sm:col-span-2 sm:row-start-2 ">
                    <about-tech-label-group 
                        :label-array="technologiesArray" 
                        ref="scrollInstance"
                    />
                </div>


            </div>
        </div>
        </div>

    </main>
</template>
<script setup lang="ts">
const scrollInstance = ref(null);
const hiddenScroll = ref(false);

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

let prevScrollpos = window.scrollY;
console.log('y', window.scrollY)

onMounted(async () => {
    await nextTick();
    const element = scrollInstance.value;
    console.log(scrollInstance.value)

    if (!element) return;

    window.onscroll = function () {
        console.log('y', window.scrollY)

        const currentScrollPos = window.scrollY;
        if (currentScrollPos > 0) {
            //element.style.top = "0";
            hiddenScroll.value = true;
        } else {
            hiddenScroll.value = false;
        }
    }
})

</script>
