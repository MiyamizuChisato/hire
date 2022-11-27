<script setup>
import { getTheme, themeChangeTrigger } from '../../utils/theme.js'
import { ref } from 'vue'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
//START==================================主题模式切换//
const darkBtn = ref(getTheme() === 'light')
const darkBtnChange = () => {
    darkBtn.value = !darkBtn.value
}
//END====================================主题模式切换//

//START==================================登陆窗口控制//
const dialog = ref(false)
const signup = ref(false)
const openDialogTrigger = () => {
    dialog.value = true
}
const closeDialogTrigger = () => {
    dialog.value = false
}
const showSignUpTrigger = () => {
    signup.value = true
}
const showSignInTrigger = () => {
    signup.value = false
}
</script>
<template>
    <div right='30' position='absolute'>
        <v-btn @click='darkBtnChange();themeChangeTrigger()' m='x-4' size='36' bgc-transparent icon flat>
            <span v-if='darkBtn' i-ic-round-dark-mode color-strong></span>
            <span v-else i-ic-round-light-mode color-strong></span>
        </v-btn>
        <v-btn @click='openDialogTrigger' m='x-4' bgc-primary flat>
            <span color-light>登陆</span>
        </v-btn>
    </div>
    <v-dialog v-model='dialog' transition='dialog-bottom-transition' flex-center>
        <sign-up v-if='signup' />
        <sign-in v-else />
    </v-dialog>
</template>
