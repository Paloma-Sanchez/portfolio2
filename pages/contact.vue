<template>
    <main
        class="text-center flex flex-col items-center mt-24 sm:mt-40 "
    >
        <contact-logo-group/>
        <p
            class="font-Archivo text-6xl sm:text-8xl text-[#3B4856] dark:text-white mt-16 sm:mt-24 animate-appear opacity-0 mx-12 "
        >
            {{ $t("contact.title")}}
            <span
                class="text-[#317BCB] dark:text-[#69B7FF]"
            > 
                {{ $t("contact.highlight")}}
            </span>
                !
        </p>
        <div
            class="flex mt-20 sm:mt-28 font-Almarai text-[#317BCB] dark:text-[#69B7FF] text-xl sm:text-3xl justify-center items-center animate-slideUp900Delay opacity-0"
        >
            <p
                class="mr-2 "
            >karenpaloma.sanchez@gmail.com</p>
            <Icon
                name="ion:md-paper-plane"
                width="14px"
            />
        </div>
    </main>
</template>