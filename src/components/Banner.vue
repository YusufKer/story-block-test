<template>
    <div v-editable="blok"  :style="`background-image: url(${blok.background_image})`" class="banner-outer">
        <div class="container" :class="blok.layout === '2' && 'grid grid-cols-2 gap-4 justify-center'">
            <div>
                <component :is="blok.heading_tag">{{ blok.heading }}</component>
                <p>{{ blok.description }}</p>
                <img class="w-full max-w-[400px] aspect-square pt-4 m-auto" v-if="blok.layout === '1'" :src="blok.featured_image" alt="test"/>
            </div>
            <div v-if="blok.layout === '2'">
                <img class="max-w-[400px] aspect-square" :src="blok.featured_image" alt="test"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({blok:Object})
</script>

<style scoped>
    .banner-outer{
        width:100vw;
        background-size: cover;
        background-position: center;
    }
    .container{
        background:lightblue;
    }
</style>