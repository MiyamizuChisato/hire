<script setup>
import { inject, ref } from 'vue'
import { userUpdateResume } from '../../../../api/userApi.js'

const user = inject('user')
const browse = inject('browse')
const cos = inject('cos')
const resumeLoading = ref(false)
const onResumeChanged = async (e) => {
    resumeLoading.value = true
    const fd = new FormData()
    fd.append('resume', e.target.files[0])
    const { code, data } = await userUpdateResume(fd)
    if (code > 0) {
        user.value.resume = data
        resumeLoading.value = false
    }
}
</script>
<template>
    <div p='x-4 y-1' v-if='user' color-normal bgc-container>
        <template v-if='browse'>
            <div m='y-3' color-normal flex-between>
                <div color-secondary>电子邮箱</div>
                <div color-normal>{{ user.email }}</div>
            </div>
            <div m='y-3' color-normal flex-between>
                <div color-secondary>个人昵称</div>
                <div color-normal>{{ user.nickname }}</div>
            </div>
            <div v-for='(item,index) in user.labels' m='y-3' :key='index' color-normal flex-between>
                <div color-secondary>求职方向({{ index + 1 }})</div>
                <div v-if='item.content' color-normal>{{ item.content }}</div>
                <div color-disable v-else>未填写</div>
            </div>
            <div m='y-3' color-normal flex-between>
                <div color-secondary>简历文件</div>
                <a :href='cos+user.resume' target='_blank' cursor='pointer' select='none' color-primary>我的简历</a>
            </div>
        </template>
        <template v-else>
            <v-form>
                <div m='t-4'>
                    <v-text-field label='邮箱(不可修改)' v-model='user.email' density='compact' variant='underlined'
                                  transition-duration readonly />
                </div>
                <div m='t-4'>
                    <v-text-field label='昵称' v-model='user.nickname' density='compact' variant='underlined'
                                  transition-duration />
                </div>
                <div v-for='(item,index) in user.labels' :key='index' m='t-4'>
                    <v-text-field :label='`求职方向(${index+1})`' v-model='item.content' density='compact'
                                  variant='underlined' placeholder='请输入2-5个关键字' transition-duration />
                </div>
                <div m='t-4'>
                    <v-file-input accept='.pdf' label='简历(PDF)' prepend-icon='i-mdi-file-pdf'
                                  density='compact' variant='underlined' placeholder='请传入PDF格式文件'
                                  @change='onResumeChanged' :loading='resumeLoading' transition-duration />
                </div>
            </v-form>
        </template>
    </div>
</template>