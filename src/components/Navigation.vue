<template>
    <div v-editable="blok" class="gradient">
        <div class="container flex justify-between items-center">
            <a :href="blok.logo_link.url" title="Home">
                <img class="w-10 h-10 object-contain onject-center" :src="blok.logo" alt="not found">
            </a>
            <ul class="flex items-center gap-4">
                <li class="link-group relative" v-for="(group, index) in blok.link_groups">
                    <label @click="toggleMenu(index)" class="cursor-pointer decoration-2 underline-offset-4 hover:underline" :title="group.title">{{ group.title }}</label>
                    <ul :class="openMenuID === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'" class="sub-links absolute list-none p-4">
                        <li v-for="link in group.link" class="w-max"><a :href="link.url.url" :title="link.title">{{ link.title }}</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    defineProps({blok:Object});
</script>

<script>
    export default {
        name:"TESTING",
        data(){
            return {
                openMenuID: null
            }
        },
        methods:{
            toggleMenu(id){
                if(this.openMenuID === id){
                    this.openMenuID = null;
                }
                else{
                    this.openMenuID = id
                }
            }
        }
        
    }
</script>

<style scoped>
    .link-group .sub-links{
        top: calc(100% + 1rem);
        left: 0;
        background-color: lightblue;
    }
</style>
