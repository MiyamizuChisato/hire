<script setup>
import { reactive, ref } from 'vue'

const user = reactive({
    email: '930801302@qq.com',
    password: 'ao1sakura',
    nickname: '赵先生'
})
const browse = ref(true)
</script>
<template>
    <div p='x-4 y-1' bgc-container>
        <template v-if='browse'>
            <div m='y-3' color-normal flex-between>
                <div color-secondary>电子邮箱</div>
                <div color-normal>{{ user.email }}</div>
            </div>
            <div m='y-3' color-normal flex-between>
                <div color-secondary>个人昵称</div>
                <div color-normal>{{ user.nickname }}</div>
            </div>
            <div m='y-3' color-normal flex-between>
                <div color-secondary>求职方向</div>
                <div color-normal>{{ user.nickname }}</div>
            </div>
            <div m='y-3' color-normal flex-between>
                <div color-secondary>简历文件</div>
                <div color-normal>{{ user.nickname }}</div>
            </div>
        </template>
        <div color-normal v-else>
            <div m='t-4'>
                <v-text-field label='昵称' v-model='user.nickname' density='compact' variant='underlined'
                              transition-duration />
            </div>
            <div m='t-4'>
                <v-text-field label='邮箱(不可修改)' v-model='user.email' density='compact' variant='underlined'
                              transition-duration readonly />
            </div>
        </div>
    </div>
</template>