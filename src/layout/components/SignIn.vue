<script setup>
import { reactive, ref } from 'vue'
import { userLogin } from '../../api/userApi.js'
import { useToast } from 'vue-toastification'
import { useUserStore } from '../../store/userStore.js'
import { EMAIL_RULE, PASSWD_RULE } from '../../utils/rules.js'

const userStore = useUserStore()
const emits = defineEmits(['close-dialog', 'nav-sign-up'])
const closeDialogTrigger = () => {
    emits('close-dialog')
}
const navToSignUpTrigger = () => {
    emits('nav-sign-up')
}
const valid = ref(false)
const formRef = ref(null)
const user = reactive({
    email: '',
    password: ''
})
const loginTrigger = async () => {
    formRef.value.validate()
    if (!valid.value) {
        return
    }
    const { code, data } = await userLogin(user)
    if (code > 0) {
        const toast = useToast()
        userStore.saveToken(data)
        emits('close-dialog')
        toast.success('欢迎回来，登陆成功')
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
            <div font='600' text='8' color-strong>欢迎回来，</div>
            <v-btn @click='navToSignUpTrigger' variant='tonal' bgc-warning>
                <span color-light>注 册</span>
            </v-btn>
        </div>
        <div text='5'>请输入以下信息进行登陆</div>
        <div m='y-4'>
            <v-form v-model='valid' ref='formRef' lazy-validation>
                <div m='y-2'>
                    <v-text-field :rules='EMAIL_RULE' type='text' v-model='user.email' label='邮箱' />
                </div>
                <div m='=y-2'>
                    <v-text-field :rules='PASSWD_RULE' type='password' v-model='user.password' label='密码' />
                </div>
                <v-btn m='t-2 b-6' @click='loginTrigger' variant='tonal' bgc-primary block>
                    <span color-light>登 陆</span>
                </v-btn>
            </v-form>
        </div>
    </div>
</template>
