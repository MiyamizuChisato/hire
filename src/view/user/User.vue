<script setup>
import UserHeader from './components/UserHeader.vue'
import { ref } from 'vue'

const panel = ref(1)
</script>
<template>
    <div id='user' w='768px lt-md:100%' margin-center>
        <user-header m='y-5' />
        <v-tabs v-model='panel' w='100%' overflow='hidden' rounded='2' bgc-container fixed-tabs>
            <v-tab value='1'>1</v-tab>
            <v-tab value='2'>2</v-tab>
            <v-tab value='3'>3</v-tab>
        </v-tabs>
        <v-window v-model='panel'>
            <v-window-item value='1'>1</v-window-item>
            <v-window-item value='2'>2</v-window-item>
            <v-window-item value='3'>3</v-window-item>
        </v-window>
    </div>
</template>
