<template>
    <main>
        <p
            class="font-Archivo text-5xl lg:text-6xl xl:text-8xl text-[#1B4572] dark:text-[#DCECFF] font-extrabold text-center lg:text-left mt-16  lg:mt-20 lg:ml-20  xl:ml-32 mb-10 lg:mb-0"
        >
            {{ $t ("projects.title")}}
        </p>
        <projects-video-grid
            class="lg:ml-[37%] xl:ml-[45%] lg:-mt-28 xl:-mt-36 flex justify-center"
        />
    </main>

</template>