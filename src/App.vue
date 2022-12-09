<script setup>
import { provide } from 'vue'
provide('cos', import.meta.env.VITE_COS)
</script>

<template>
    <router-view />
</template>
