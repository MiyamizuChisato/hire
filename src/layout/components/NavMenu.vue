<script setup>
import { go } from '../../utils/router.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const toggle = computed(() => router.currentRoute.value)
</script>
<template>
    <div>
        <v-btn-toggle v-model='toggle.name' rounded='0' mandatory>
            <v-btn value='index' @click='go("/index")' m='x-3' p='!x-7'><span>首页</span></v-btn>
            <v-btn value='position' @click='go("/position")' m='x-3' p='!x-7'><span>职位</span></v-btn>
            <v-btn value='magazine' @click='go("/magazine")' m='x-3' p='!x-7'><span>周刊</span></v-btn>
            <v-btn value='message' @click='go("/message")' m='x-3' p='!x-7'><span>消息</span></v-btn>
        </v-btn-toggle>
    </div>
</template>