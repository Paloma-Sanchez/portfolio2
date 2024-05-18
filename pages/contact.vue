<template>
    <main
        class="text-center flex flex-col items-center mt-40 "
    >
        <contact-logo-group/>
        <p
            class="font-Archivo text-8xl text-[#3B4856] dark:text-white  mt-24 animate-appear opacity-0"
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
            class="flex mt-28  font-Almarai text-[#317BCB] dark:text-[#69B7FF] text-3xl justify-center items-center animate-slideContactUp opacity-0"
        >
            <p
                class="mr-2 "
            >karenpaloma.sanchez@gmail.com</p>
            <Icon
                name="ion:md-paper-plane"
            />
        </div>
    </main>
</template>