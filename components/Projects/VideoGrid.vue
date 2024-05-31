<template>
  <div class="flex justify-center mt-6 sm:mt-10 mb-10 opacity-0 animate-slideUp400Delay">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-8 xl:pl-20 auto-rows-[256px] sm:auto-rows-[208px] lg:auto-rows-[256px] xl:grid-cols-3 w-11/12 rounded">
      <div
        v-for="(project, index) in projects"
        class="overflow-hidden"
        :class="[
          gridProjectVideoClass(index),
          gridProjectVideoClassXl(index),
          {
            '': index === 2,
          },
        ]"
        @mouseover="playVideo(index)"
        @mouseleave="stopVideo(index)"
      >
      <div
          class="absolute h-64 sm:h-52 lg:h-64 z-20  overflow-hidden  "
          :class="[
            {
              'w-[91%] sm:w-[45%] xl:transform xl:-translate-x-24 desktop:-translate-x-32 ': index === 0,
              'w-[91%] sm:w-[45%] xl:w-[30%]': index === 1,
              'w-[91%] sm:w-[45%] xl:w-[30%] ': index === 2
            }
          ]"
      >
          <div
            class="relative xl:w-[110%]"
            >
            <div
                class="h-0 xl:w-[110%] bg-white dark:bg-black absolute z-10 "
                :class="
                    [
                        {
                           'height-scale': mouseActive && index === indexActive,
                           'height-unscale': !mouseActive && index === indexActive,
                        }
                    ]"
            ></div>
            <div
                class="h-full w-0 bg-white dark:bg-black absolute z-10 "
                :class="[
                        {
                           'width-scale': mouseActive && index === indexActive,
                           'width-unscale': !mouseActive && index === indexActive, 
                        }
                    ]"
            ></div>
             <div
                class="h-full w-0 bg-white dark:bg-black absolute z-10 right-0"
                :class="[
                        {
                           'width-scale': mouseActive && index === indexActive,
                           'width-unscale': !mouseActive && index === indexActive, 
                        }
                    ]"
            ></div>
            <NuxtLink :to="project.url" target="_blank">
            <video 
                class="" 
                :class="[
                    {
                        'video-scale': mouseActive && index === indexActive,
                        'video-unscale':!mouseActive && index === indexActive,
                    
                    }
                ]"
                ref="videoInstance" 
                muted
                >
                <source :src="videosWebm[index]" type="video/webm; codecs=vp9,opus" />
                <source :src="videosMp4[index]" type="video/mp4; codecs=hvc1" />
            </video>
            </NuxtLink>
            <div
                class="h-0 w-full bg-white dark:bg-black absolute z-10 bottom-10"
                :class="[
                        {
                           'height-scale': mouseActive && index === indexActive,
                           'height-unscale': !mouseActive && index === indexActive,
                        
                        }
                    ]"
            ></div>
        </div>

          
      </div>
        
        
      </div>

      <div
        v-for="(project, index) in projects"
        class="hidden h-full sm:flex items-center"
        :class="[gridNumberClass(index), gridNumberClassXl(index)]"
      >
        <div
          class="flex  flex-col items-start justify-around w-full text-xl font-Archivo dark:text-[#DCECFF]"
          :class="[
            {
               'ml-20': index !==0
            }
          ]"        
          >
          <p class=" text-7xl uppercase font-kannadaFake ">
            {{ project.name }}
          </p>
          <p class="text-xl font-Archivo font-extralight">
            {{ project.summary }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { twJoin, twMerge } from "tailwind-merge";
import { projects } from "../../projects_db.json";
import prelloVideoWebm from "../../assets/video/prello.webm";
import prelloVideoMp4 from "../../assets/video/prello.mp4";
import pmailVideoWebm from "../../assets/video/pmail.webm";
import pmailVideoMp4 from "../../assets/video/pmail.mp4";
import autoResolverWebm from "../../assets/video/autoResolve.webm";
import autoResolverMp4 from "../../assets/video/autoResolve.mp4";

const videosWebm = [prelloVideoWebm, autoResolverWebm, pmailVideoWebm];
const videosMp4 = [prelloVideoMp4, autoResolverMp4, pmailVideoMp4];

const mouseActive = ref(false);
const indexActive = ref(null);
const videoInstance = ref([]);

const gridNumberClass = (index: number): string => {
  const colStartSecond = (index + 1) % 2 !== 0 ? "col-start-1" : "";
  const colStartFirst = (index + 1) % 2 === 0 ? "col-start-2" : "";
  const row = "row-end-" + (index + 2).toString();

  return twMerge(twJoin(colStartSecond, colStartFirst, row));
};

const gridNumberClassXl = (index: number): string => {
  const colStartFirst = (index + 1 - 1) % 4 === 0 ? "xl:col-start-1" : "";
  const colStartSecond = (index + 1) % 2 === 0 ? "xl:col-start-2" : "";
  const colStartThird = (index + 1 - 1) % 2 === 0 ? "xl:col-start-3" : "";
  const row = "row-end-" + (index + 2).toString();

  return twMerge(twJoin(colStartThird, colStartSecond, colStartFirst, row));
};

const gridProjectVideoClass = (index: number): string => {
  const colStartSecond = (index + 1) % 2 !== 0 ? "sm:col-start-2" : "";
  const colStartFirst =
    (index + 1) % 4 === 0 ? "sm:col-start-3" : (index + 1) % 2 === 0 ? "sm:col-start-1" : "";
  const row = "sm:row-end-" + (index + 2).toString();

  return twMerge(twJoin(colStartSecond, colStartFirst, row));
};

const gridProjectVideoClassXl = (index: number): string => {
  const colStartFirst =
    (index + 1) % 2 === 0 && (index + 1) % 4 !== 0 ? "xl:col-start-1" : "";
  const colStartSecond = (index + 1 - 1) % 2 === 0 ? "xl:col-start-2" : "";
  const colStartThird = (index + 1) % 4 === 0 ? "xl:col-start-3" : "";
  const row = "sm:row-end-" + (index + 2).toString();

  return twMerge(twJoin(colStartThird, colStartSecond, colStartFirst, row));
};

const handleMouseEnterOverlay = (index) => {
  console.log("hey");
  indexActive.value = index;
  mouseActive.value = true;
};

const playVideo = (index: number) => {
  indexActive.value = index;
  mouseActive.value = true;
  videoInstance.value[index].play();
};

const stopVideo = (index: number) => {
  mouseActive.value = false;
  videoInstance.value[index].pause();
  videoInstance.value[index].currentTime = 0;
};
</script>
<style>
.video-scale,
.video-unscale,
.height-scale,
.height-unscale,
.width-scale,
.width-unscale {
  transition: all 500ms ease-in-out;
}

.video-scale {
  transform: scale(105%);
}

.video-unscale {
    transform: scale(100%);
}

.height-scale{
    height: 10px;
}

.height-unscale {
    height: 0;
}

.width-scale {
    width: 10px;
}

.width-unscale {
    width: 0;
}
</style>
