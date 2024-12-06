<template>
    <button
        :style="{
            width: width,
            height: height,
            borderColor: borderColor,
            background: gradientColor
        }"
        class="inline-flex animate-shine items-center justify-center rounded-xl text-lg border px-4 py-2 font-medium text-white transition-colors"
    >
        {{ children }}
    </button>
</template>

<script>
export default {
    name: 'ButtonBackgroundShine',
    props: {
        children: {
            type: String,
            required: true,
        },
        width: {
            type: String,
            default: '15rem', 
        },
        height: {
            type: String,
            default: '2.5rem', 
        },
        borderColor: {
            type: String,
            default: 'sky-800', // Couleur par défaut pour la bordure
        },
        gradientColor: {
            type: String,
            default: 'linear-gradient(110deg, #0284c7 45%, #bae6fd 55%, #0284c7)', // Dégradé par défaut
        },
    },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
