<template>
    <div class="gallery">
        <div class="card" v-for="card in cards">
            <p>{{ card.title }}</p>
            <p>{{ card.description }}</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({cards:Object})
</script>

<style scoped>
    .gallery{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;
    }
    .card{
        background: lightblue;
        border-radius: 1rem;
        padding: 1rem;
    }
</style>