import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';

import './style.css'

import App from './App.vue';

// IMPORT PAGES
import Home from "./pages/Home.vue";
import AboutUs from "./pages/AboutUs.vue";

const router = createRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about-us',
      component: AboutUs
    }
  ],
  history: createWebHistory()
})

import Page from './components/Page.vue';
import Navigation from './components/Navigation.vue';
import Banner from './components/Banner.vue';
import Section from './components/Section.vue';
import Carousel from './components/Carousel.vue';
import Gallery from './components/Gallery.vue';
import Form from './components/Form.vue';


const app = createApp(App)
app.use(router);

app.use(StoryblokVue, {
    accessToken: 'JUUl9DQQSGtr6BDkbCMRUAtt',
    previewToken: 'JUUl9DQQSGtr6BDkbCMRUAtt',
    use: [apiPlugin],
  });

app.component('Page', Page);
app.component('Navigation', Navigation);
app.component('Banner', Banner);
app.component('Section', Section);
app.component('Carousel', Carousel);
app.component('Gallery', Gallery);
app.component('Form', Form);

app.mount('#app')
