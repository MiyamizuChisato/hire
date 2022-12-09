<script setup>
import UserHeader from './components/UserHeader.vue'
import UserInfo from './components/info/UserInfo.vue'
import { onMounted, provide, ref } from 'vue'
import UserSend from './components/send/UserSend.vue'
import UserPublish from './components/publish/UserPublish.vue'
import { userGetById } from '../../api/userApi.js'
import { useUserStore } from '../../store/userStore.js'

const userStore = useUserStore()
const panel = ref('info')
const user = ref(null)
const browse = ref(true)
const init = async () => {
    const { code, data } = await userGetById(userStore.user.id)
    if (code > 0) {
        user.value = data
    }
}
onMounted(() => {
    init()
})
provide('browse', browse)
provide('user', user)
</script>
<template>
    <div id='user' w='768px lt-md:100%' v-if='user' margin-center>
        <user-header m='y-5' />
        <v-tabs v-model='panel' w='100%' shadow='sm' overflow='hidden' rounded='2'
                bgc-container color-strong fixed-tabs>
            <v-tab value='info'>我的信息</v-tab>
            <v-tab value='send'>我的投递</v-tab>
            <v-tab value='publish'>我的发布</v-tab>
        </v-tabs>
        <v-window m='y-3' rounded='2' v-model='panel'>
            <v-window-item value='info'>
                <keep-alive>
                    <user-info />
                </keep-alive>
            </v-window-item>
            <v-window-item value='send'>
                <keep-alive>
                    <user-send />
                </keep-alive>
            </v-window-item>
            <v-window-item value='publish'>
                <keep-alive>
                    <user-publish />
                </keep-alive>
            </v-window-item>
        </v-window>
    </div>
</template>
