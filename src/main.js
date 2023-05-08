import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';
import Page from './components/Page.vue';
import Navigation from './components/Navigation.vue';
import Banner from './components/Banner.vue';
import Section from './components/Section.vue';
import Carousel from './components/Carousel.vue';
import Gallery from './components/Gallery.vue';


const app = createApp(App)

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

app.mount('#app')
