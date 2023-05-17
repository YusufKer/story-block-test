<template>
    <div v-editable="blok" class="container bg-red-50">
        <h2>{{ blok.heading }}</h2>
        <p>{{ blok.description }}</p>
        <form action="" class="max-w-[500px] grid gap-4">
            <div v-for="(inputGroup, index) in blok.input_groups" class="input-group grid gap-1 border">
                <!-- CHECK WITH DEVON ABOUT WAYS TO GENERATE A UNIQUI ID -->
                <label v-if="inputGroup.label" :for="'input_' + index">{{ inputGroup.label }}:</label>
                <input :id="'input_' + index" :type="inputGroup.input_type" :placeholder="inputGroup.placeholder ? inputGroup.placeholder : ''"/>
            </div>
            <button @click.prevent="submit">Submit</button>
        </form>        
    </div>
</template>

<script setup>
    defineProps({blok:Object})
</script>

<style scoped>

</style>