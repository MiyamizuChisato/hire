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
            <v-btn @click='go("/index")' value='index' m='x-3' p='!x-7' bgc-transparent>
                <span color-strong>首页</span>
            </v-btn>
            <v-btn @click='go("/position")' value='position' m='x-3' p='!x-7' bgc-transparent>
                <span color-strong>职位</span>
            </v-btn>
            <v-btn @click='go("/magazine")' value='magazine' m='x-3' p='!x-7' bgc-transparent>
                <span color-strong>周刊</span>
            </v-btn>
            <v-btn @click='go("/message")' value='message' m='x-3' p='!x-7' bgc-transparent>
                <span color-strong>消息</span>
            </v-btn>
        </v-btn-toggle>
    </div>
</template>