<script setup>
  import { useStoryblok } from '@storyblok/vue';
  const story = await useStoryblok('home', { version: 'draft' });
</script>

<template>
  <div>
      <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>