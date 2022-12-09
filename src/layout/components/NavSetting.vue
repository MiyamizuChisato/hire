<script setup>
import { getTheme, themeChangeTrigger } from '../../utils/theme.js'
import { computed, inject, ref } from 'vue'
import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
import { useUserStore } from '../../store/userStore.js'
import Avatar from '../../components/Avatar.vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const darkBtn = ref(getTheme() === 'light')
const darkBtnChange = () => {
    darkBtn.value = !darkBtn.value
}
const router = useRouter()
const cos = inject('cos')
const dialog = ref(false)
const signup = ref(false)
const user = computed(() => userStore.user)
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
const go = (path) => {
    if (path !== '' || path !== null) {
        router.push(path)
    }
}
</script>
<template>
    <div right='30' position='absolute'>
        <v-btn @click='darkBtnChange(); themeChangeTrigger()' m='x-2' size='42' bgc-transparent icon flat>
            <span v-if='darkBtn' text='8' i-ic-round-dark-mode color-strong></span>
            <span v-else i-ic-round-light-mode color-strong></span>
        </v-btn>
        <template v-if='user'>
            <v-btn variant='text' m='x-2' size='42px' icon>
                <avatar width='32px' height='32px' :image='cos+user.avatar' />
            </v-btn>
            <v-btn @click='go("/publish/position")' m='x-4' bgc-primary flat>
                <span color-light>招聘</span>
            </v-btn>
        </template>
        <v-btn @click='openDialogTrigger' m='x-2' bgc-primary flat v-else>
            <span color-light>登陆</span>
        </v-btn>
    </div>
    <v-dialog v-model='dialog' transition='dialog-bottom-transition' persistent flex-center>
        <sign-up @close-dialog='closeDialogHandler' @nav-sign-in='showSignInHandler' v-if='signup' />
        <sign-in @close-dialog='closeDialogHandler' @nav-sign-up='showSignUpHandler' v-else />
    </v-dialog>
</template>
