<template>
    <div
        class="text-[#1E1E1E] dark:text-[#E3F0FF] font-Almarai  "
    >
        <button 
            v-if="locale === 'fr'"
            type="button" 
            @click="setLocale('en')"
        >
            EN
        </button>
        <button 
            v-else
            type="button" 
            @click="setLocale('fr')"
        >
            FR
        </button>
    </div>
</template>
<script setup lang="ts">
const { locale, setLocale } = useI18n();
watch(locale, () => {
    console.log('locale', locale.value)
})
</script>