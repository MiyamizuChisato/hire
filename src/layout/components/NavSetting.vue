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

//START======================================窗口控制//
const dialog = ref(false)
const signup = ref(false)
const openDialogTrigger = () => {
    dialog.value = true
}
const closeDialogHandler = () => {
    dialog.value = false
}
const showSignUpHandler = () => {
    signup.value = true
}
const showSignInHandler = () => {
    signup.value = false
}
//END=======================================窗口控制//
</script>
<template>
    <div right='30' position='absolute'>
        <v-btn @click='darkBtnChange(); themeChangeTrigger()' m='x-4' size='36' bgc-transparent icon flat>
            <span v-if='darkBtn' i-ic-round-dark-mode color-strong></span>
            <span v-else i-ic-round-light-mode color-strong></span>
        </v-btn>
        <v-btn @click='openDialogTrigger' m='x-4' bgc-primary flat>
            <span color-light>登陆</span>
        </v-btn>
    </div>
    <v-dialog v-model='dialog' transition='dialog-bottom-transition' persistent flex-center>
        <sign-up @close-dialog='closeDialogHandler' @nav-sign-in='showSignInHandler' v-if='signup' />
        <sign-in @close-dialog='closeDialogHandler' @nav-sign-up='showSignUpHandler' v-else />
    </v-dialog>
</template>
