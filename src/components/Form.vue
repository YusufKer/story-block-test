<template>
    <div v-editable="blok" class="container bg-red-50">
        <h2>{{ blok.heading }}</h2>
        <p>{{ blok.description }}</p>
        <form ref="form" class="max-w-[500px] grid gap-4">
            <div v-for="(inputGroup, index) in blok.input_groups" class="input-group grid gap-1 border">
                <label 
                    v-if="inputGroup.label" 
                    :title="inputGroup.description"
                    :for="'input_' + index"
                >
                {{ inputGroup.label }}:
                </label>
                <input
                    :name="inputGroup.label"
                    :id="'input_' + index"
                    :type="inputGroup.input_type" 
                    :placeholder="inputGroup.placeholder ? inputGroup.placeholder : ''"
                />
            </div>
            <button class="bg-blue-50 py-4" @click.prevent="submit">Submit</button>
        </form>        
    </div>
</template>

<script setup>

    import { ref } from 'vue';

    const props = defineProps({blok:Object});
    const form = ref();

    async function submit(){
        const inputs = form.value.querySelectorAll('input');
        const object = {};
        inputs.forEach(input => object[input.name] = input.value);
        await fetchdata();
    }

    async function fetchdata(){
        try{
            const response = await fetch(props.blok.endpoint.url);
            const data = await response.json();
            console.log(data);
        }catch(error){
            console.log(error)
        }
    }
</script>

<style scoped>

</style>