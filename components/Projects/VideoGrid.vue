<template>
    <div >
        <div
            class="grid grid-cols-2 w-[640px] max-h-[632px] border dark:border-zinc-800 border-zinc-300 overflow-y-scroll rounded "
        >
            <div
                v-for="project, index in projects"
                class="h-52 "
                :class="gridProjectElementClass(index)"
            >
                <video
                    class="w-full"
                    ref="videoInstance"
                    @mouseover="playVideo(index)"
                    @mouseleave="stopVideo(index)"
                >
                    <source
                        :src="project.video2"
                        type="video/webm; codecs=vp9,opus"
                    />
                    <source 
                        :src="project.video1"
                        type="video/mp4; codecs=hvc1"
                    />
                </video>
            </div>
            <div
                v-for="project, index in projects"
                class="h-52 flex items-end "
                :class="gridNumberElementClass(index)"
            >
                <div
                    class="flex items-end justify-around w-full text-xl font-Archivo dark:text-[#DCECFF]"
                >
                    <p
                        class="font-extralight  "
                    >
                        {{ project.name }}
                    </p>
                    <p
                        class="text-6xl"
                    >
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

const playVideo = (index: number) => {
    videoInstance.value[index].play();
};
const stopVideo = (index: number) => {
    videoInstance.value[index].pause();
    videoInstance.value[index].currentTime = 0;
};

</script>