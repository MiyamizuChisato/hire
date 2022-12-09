<script setup>
import { reactive, ref } from 'vue'
import { sendVerifyCode } from '../../api/mailApi.js'
import { useToast } from 'vue-toastification'
import { userRegister } from '../../api/userApi.js'
import { useUserStore } from '../../store/userStore.js'
import { EMAIL_EXP } from '../../utils/regexp.js'
import { CODE_RULE, EMAIL_RULE, NICKNAME_RULE, PASSWD_RULE } from '../../utils/rules.js'

const userStore = useUserStore()
const emits = defineEmits(['close-dialog', 'nav-sign-in'])
const closeDialogTrigger = () => {
    emits('close-dialog')
}
const navToSignInTrigger = () => {
    emits('nav-sign-in')
}
const user = reactive({
    email: '',
    password: '',
    code: '',
    nickname: ''
})
const formRef = ref(null)
const valid = ref(false)
const timer = ref(0)
const codeSendTrigger = async () => {
    const toast = useToast()
    if (!EMAIL_EXP.test(user.email)) {
        toast.error('请将正确的电子邮箱地址告诉我们')
        return
    }
    const { code } = await sendVerifyCode(user.email)
    if (code > 0) {
        timer.value = 90
        const codeTimer = setInterval(() => {
            timer.value -= 1
            if (timer.value <= 0) {
                clearInterval(codeTimer)
            }
        }, 1000)
        toast.success('验证码发送成功，请注意检查你的邮箱。')
    }
}
const registerTrigger = async () => {
    formRef.value.validate()
    if (!valid.value) {
        return
    }
    const { code, data } = await userRegister(user)
    if (code > 0) {
        userStore.saveToken(data)
        emits('close-dialog')
        const toast = useToast()
        toast.success('注册成功，已为你自动登陆')
    }
}
</script>
<template>
    <div shadow='lg' w='110' p='x-6' rounded='2' color-normal margin-center bgc-screen>
        <div m='y-4'>
            <v-btn @click='closeDialogTrigger' size='small' bgc-transparent flat icon>
                <i text='8' i-mdi-arrow-left-bold-circle bgc-danger />
            </v-btn>
        </div>
        <div flex-between>
            <div font='600' text='8' color-strong>欢迎注册，</div>
            <v-btn @click='navToSignInTrigger' variant='tonal' bgc-warning>
                <span color-light>登 录</span>
            </v-btn>
        </div>
        <div text='5'>请输入以下信息进行注册</div>
        <div m='y-4'>
            <v-form ref='formRef' v-model='valid' lazy-validation>
                <div m='y-2'>
                    <v-text-field :rules='EMAIL_RULE' v-model='user.email' label='邮箱'>
                        <template #append-inner>
                            <v-avatar v-if='timer > 0' color-secondary>
                                {{ timer }}
                            </v-avatar>
                            <v-btn @click='codeSendTrigger' variant='flat' bgc-primary v-else>
                            <span color-light>
                                发送
                            </span>
                            </v-btn>
                        </template>
                    </v-text-field>
                </div>
                <div m='y-2'>
                    <v-text-field :rules='CODE_RULE' v-model='user.code' label='验证码' />
                </div>
                <div m='y-2'>
                    <v-text-field type='password' :rules='PASSWD_RULE' v-model='user.password' label='密码' />
                </div>
                <div m='y-2'>
                    <v-text-field :rules='NICKNAME_RULE' v-model='user.nickname' label='昵称' />
                </div>
                <v-btn m='t-2 b-6' @click='registerTrigger' variant='tonal' bgc-success block>
                    <span color-light>注 册</span>
                </v-btn>
            </v-form>
        </div>
    </div>
</template>
