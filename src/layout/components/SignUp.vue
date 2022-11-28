<script setup>
import { reactive } from 'vue'
//START===================================窗口控制//
const emits = defineEmits(['close-dialog', 'nav-sign-in'])
const closeDialogTrigger = () => {
  emits('close-dialog')
}
const navToSignInTrigger = () => {
  emits('nav-sign-in')
}
//END====================================窗口控制//
const user = reactive({
  email: '',
  password: '',
  code: '',
  nickname: ''
})

</script>
<template>
  <div shadow='lg' w='110' p='x-6' rounded='2' color-normal margin-center bgc-screen>
    <div m='y-4'>
      <v-btn @click="closeDialogTrigger" size='small' bgc-transparent flat icon>
        <i text='8' i-mdi-arrow-left-bold-circle bgc-danger />
      </v-btn>
    </div>
    <div flex-between>
      <div font='600' text='8' color-strong>欢迎注册，</div>
      <v-btn @click="navToSignInTrigger" variant='tonal' bgc-warning>
        <span color-light>登 录</span>
      </v-btn>
    </div>
    <div text='5'>请输入以下信息进行注册</div>
    <div m='y-4'>
      <v-form>
        <v-text-field v-model='user.email' label='邮箱' />
        <v-text-field v-model='user.code' label='验证码'></v-text-field>
        <v-text-field v-model='user.password' label='密码' />
        <v-text-field v-model='user.nickname' label='昵称' />
        <v-btn variant='tonal' bgc-success block>
          <span color-light>注 册</span>
        </v-btn>
      </v-form>
    </div>
    <div></div>
  </div>
</template>
