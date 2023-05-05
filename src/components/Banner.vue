<template>
    <div v-editable="blok"  :style="`background-image: url(${blok.background_image})`" class="banner-outer">
        <div class="container" :class="blok.layout === '2' && 'grid-cols-2'">
            <div>
                <component :is="blok.heading_tag">{{ blok.heading }}</component>
                <p>{{ blok.description }}</p>
                <img class="featured-image" v-if="blok.layout === '1'" :src="blok.featured_image" alt="test"/>
            </div>
            <div v-if="blok.layout === '2'">
                <img class="featured-image" :src="blok.featured_image" alt="test"/>
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
    .grid-cols-2{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        justify-items: center;
    }
    .featured-image{
        width:250px;
        height:250px;
    }
</style>