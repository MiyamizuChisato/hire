<script setup>
import PublishTitle from './PublishTitle.vue'
import PublishText from './PublishText.vue'
</script>
<template>
    <v-expansion-panel bgc-container>
        <v-expansion-panel-title>
            <publish-title />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
            <publish-text />
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
