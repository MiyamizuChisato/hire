<script setup>
import { reactive } from 'vue'

const user = reactive({
    email: '',
    password: ''
})
</script>
<template>
    <div shadow='lg' w='110' p='x-6' rounded='2' color-normal margin-center bgc-screen>
        <div m='y-4'>
            <v-btn size='small' bgc-transparent flat icon>
                <i text='8' i-mdi-arrow-left-bold-circle bgc-danger />
            </v-btn>
        </div>
        <div flex-between>
            <div font='600' text='8' color-strong>欢迎回来，</div>
            <v-btn variant='tonal' bgc-warning>
                <span color-light>注 册</span>
            </v-btn>
        </div>
        <div text='5'>请输入以下信息进行登陆</div>
        <div m='y-4'>
            <v-form>
                <v-text-field v-model='user.email' label='邮箱' />
                <v-text-field v-model='user.password' label='密码' />
                <v-btn variant='tonal' bgc-primary block>
                    <span color-light>登 陆</span>
                </v-btn>
            </v-form>
        </div>
        <div></div>
    </div>
</template>
