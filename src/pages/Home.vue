<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('home', { version: 'draft' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<style>
  html,body{
    margin:0;
    padding:0;
  }
  h1,h2,h3,h4,h5,h6{
    margin:0;
  }
  .container{
    max-width:1200px;
    margin:auto;
    padding: 1rem;
  }
</style>
