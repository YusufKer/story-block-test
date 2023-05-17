<template>
    <div :class="`grid-cols-${blok.columns}`" class="grid gap-4">
        <!-- Card might be better id extracted into it's own component -->
        <div class="card" v-for="card in blok.card">
            <p class="text-red-500">{{ card.title }}</p>
            <p>{{ card.description }}</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({blok:Object})
</script>

<style scoped>
    .card{
        background: lightblue;
        border-radius: 1rem;
        padding: 1rem;
    }
</style>