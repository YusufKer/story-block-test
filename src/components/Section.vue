<template>
    <div v-editable="blok" class="zazaza">
        <div :class="blok.stretch === 'contain' && 'container'">
            <h2>{{ blok.heading }}</h2>
            <p>{{ blok.description }}</p>
            <component :is="blok.type" :cards="blok.card"/>
        </div>
    </div>
</template>

<script setup>
    defineProps({blok:Object})
</script>

<style scoped>
    .zazaza{
        background-color: bisque;
    }
    .zazaza div{
        background: lightcoral;
    }
</style>
