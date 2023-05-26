<script setup>
    import { useStoryblok } from '@storyblok/vue';
    const story = await useStoryblok('footer', { version: 'draft' });
</script>

<template>
    <div class="bg-green-50">
        <div class="container bg-pink-50">
            {{ story }}
        </div>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>