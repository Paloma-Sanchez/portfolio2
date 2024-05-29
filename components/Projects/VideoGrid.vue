<template>
    <div>
        <div
            class="grid grid-cols-2 w-[640px] max-h-[632px] border dark:border-zinc-800 border-zinc-300 overflow-y-scroll rounded overflow-hidden "

        >
            <div v-for="project, index in projects" class="h-52  flex  overflow-hidden " :class="[
                    gridProjectElementClass(index),
                    {
                        'h-[90%] mt-4': index === 2
                    }
                ]" @mouseover="playVideo(index)" @mouseleave="stopVideo(index)">
                <video class="w-full" ref="videoInstance" muted>
                    <source :src="videosWebm[index]" type="video/webm; codecs=vp9,opus" />
                    <source :src="videosMp4[index]" type="video/mp4; codecs=hvc1" />
                </video>
            </div>
            <div 
                v-for="project, index in projects" 
                class="h-52 w-[311.5px]  overflow-hidden ml-auto "
                @mouseenter="handleMouseEnterOverlay(index)" @mouseleave="mouseActive=false" :class="[
                    gridProjectElementClass(index),
                    {
                        'animate-down': mouseActive && indexActive === index,
                        'animate-up': !mouseActive
                    }  
                ]">
                <div class="relative  h-52 bg-gray-200/75 ">
                    <div>
                        <div class="absolute bg-gray-200/75 dark:bg-gray-800/75 backdrop-blur-sm">
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="project, index in projects" class="h-52 flex items-end " :class="gridNumberElementClass(index)">
                <div class="flex items-end justify-around w-full text-xl font-Archivo dark:text-[#DCECFF]">
                    <p class="font-extralight  ">
                        {{ project.name }}
                    </p>
                    <p class="text-6xl">
                        {{ index+1 }}
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { twJoin, twMerge } from 'tailwind-merge';
import { projects } from '../../projects_db.json';
import prelloVideoWebm from '../../assets/video/prello.webm';
import prelloVideoMp4 from '../../assets/video/prello.mp4';
import pmailVideoWebm from '../../assets/video/pmail.webm';
import pmailVideoMp4 from '../../assets/video/pmail.mp4';

const videosWebm = [prelloVideoWebm, null, pmailVideoWebm];
const videosMp4 = [prelloVideoMp4, null, pmailVideoMp4];

const mouseActive = ref(false);
const indexActive = ref(null);
const videoInstance = ref([]);

const gridNumberElementClass = (index:number):string => {
    const colStartSecond = (index+1)%2 !==  0 ? 'col-start-1' : ''
    const colStartFirst = (index+1)%2 ===  0 ? 'col-start-2' : ''
    const row = 'row-end-' + (index+2).toString();

    return twMerge(twJoin(colStartSecond, colStartFirst, row))
};

const gridProjectElementClass = (index:number):string => {
    const colStartSecond = (index+1)%2 !==  0 ? 'col-start-2' : ''
    const colStartFirst = (index+1)%2 ===  0 ? 'col-start-1' : ''
    const row = 'row-end-' + (index+2).toString();

    return twMerge(twJoin(colStartSecond, colStartFirst, row))
};

const handleMouseEnterOverlay = (index) => {
    console.log('hey')
    indexActive.value = index;
    mouseActive.value = true;
}

const playVideo = (index: number) => {
    mouseActive.value = true;
    videoInstance.value[index].play();
};

const stopVideo = (index: number) => {
    mouseActive.value = false
    videoInstance.value[index].pause();
    videoInstance.value[index].currentTime = 0;
};

</script>
<style>
.animate-up,
.animate-down {
    transition: all 300ms ease;
}
    
.animate-up {
    transform: translateY(0px);
}
    
.animate-down {
    width: 0;
}

.animate {
    transform: translateY(208px);
    opacity: 0;
    z-index: -10;
}
</style>