<script setup>

import MyLabel from './components/MyLabel.vue'
import MyCarousels from './components/MyCarousels.vue'
import WorkCard from '../../components/WorkCard.vue';
</script>
<template>
    <div id='#index'>
        <my-label label='最新周刊' />
        <my-carousels />
        <my-label label='为你推荐' />
        <v-row>
            <v-col cols="4">
                <work-card />
            </v-col>
            <v-col cols="4">
                <work-card />
            </v-col>
            <v-col cols="4">
                <work-card />
            </v-col>
        </v-row>
    </div>
</template>
