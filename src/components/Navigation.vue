<template>
    <div v-editable="blok" class="navigation-outer">
        <div class="navigation container">
            <a :href="blok.logo_link.url">
                <img class="logo" :src="blok.logo" alt="not found">
            </a>
            <ul class="desktop-links">
                <li class="link-group" v-for="(group, index) in blok.link_groups">
                    <label @click="toggleMenu(index)">{{ group.title }}</label>
                    <ul :class="openMenuID === index ? 'show' : 'hide'" class="sub-links">
                        <li v-for="link in group.link"><a :href="link.url.url" :title="link.title">{{ link.title }}</a></li>
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
    .navigation-outer{
        background: lightcoral;
    }
    .navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
    }
    .logo{
        width: 3rem;
        height: 3rem;
        object-fit: contain;
        object-position: center;
    }
    .desktop-links{
        display:flex;
        align-items: center;
        gap:1rem;
        list-style-type: none;
    }
    .link-group{
        position:relative;
    }
    .link-group .sub-links{
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: calc(100% + 1rem);
        left: 0;
        list-style-type: none;
        background-color: lightblue;
        padding:1rem;
    }
    .link-group .sub-links.show{
        opacity: 1;
        pointer-events: all;
    }
</style>
