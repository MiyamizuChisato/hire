<script setup>
import UserHeader from './components/UserHeader.vue'
import UserInfo from './components/UserInfo.vue'
import { provide, reactive, ref } from 'vue'

const panel = ref('info')
const user = reactive({
    email: 'Miyamizuchisato@outlook.com',
    nickname: '456'
})
provide('user', user)
</script>
<template>
    <div id='user' w='768px lt-md:100%' margin-center>
        <user-header m='y-5' />
        <v-tabs v-model='panel' w='100%' overflow='hidden' shadow='md' rounded='2' bgc-container fixed-tabs>
            <v-tab value='info'>我的信息</v-tab>
            <v-tab value='send'>我的投递</v-tab>
            <v-tab value='publish'>我的发布</v-tab>
        </v-tabs>
        <v-window v-model='panel'>
            <v-window-item value='info'>
                <UserInfo />
            </v-window-item>
            <v-window-item value='send'>2</v-window-item>
            <v-window-item value='publish'>3</v-window-item>
        </v-window>
    </div>
</template>
