<template>
    <div v-editable="blok" class="zazaza">
        <div :class="blok.stretch === 'contain' && 'container'">
            <h2>{{ blok.heading }}</h2>
            <p>{{ blok.description }}</p>
            <!-- look into lightening this load -->
            <component :is="blok.type" :blok="blok"/>
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
