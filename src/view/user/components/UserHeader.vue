<script setup>
import { inject, reactive, ref } from 'vue'
import { userUpdate, userUpdateAvatar } from '../../../api/userApi.js'
import { useUserStore } from '../../../store/userStore.js'
import { VueCropper } from 'vue-cropper'
import Avatar from '../../../components/Avatar.vue'
import { useToast } from 'vue-toastification'
import 'vue-cropper/dist/index.css'
import { dataURLtoFile } from '../../../utils/file.js'

const userStore = useUserStore()
const user = inject('user')
const cos = inject('cos')
const browse = inject('browse')
const avatar = ref(null)
const cropperRef = ref(null)
const inputRef = ref(null)
const dialog = ref(false)
const loading = ref(false)
const cropperOptions = reactive({
    outputSize: 1,
    outputType: 'png',
    canScale: true,
    canMove: true,
    autoCrop: true,
    height: 120,
    width: 120,
    fixed: true,
    fixedBox: true,
    fixedNumber: [1, 1],
    full: true,
    canMoveBox: true,
    original: false,
    centerBox: true
})
const onAvatarChanged = (e) => {
    const file = e.target.files[0]
    if (file === undefined) {
        return
    }
    if (file.type !== 'image/png') {
        const toast = useToast()
        toast.error('目前仅支持PNG格式图片')
        return
    }
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        avatar.value = reader.result
    }
    dialog.value = true
}
const uploadTrigger = () => {
    loading.value = true
    cropperRef.value.getCropData(async (value) => {
        const file = dataURLtoFile(value, 'avatar.png')
        const fd = new FormData()
        fd.append('avatar', file)
        const { code, data } = await userUpdateAvatar(fd)
        if (code > 0) {
            userStore.saveToken(data)
        }
        cancelTrigger()
        loading.value = false
    })
}
const cancelTrigger = () => {
    dialog.value = false
    avatar.value = null
    inputRef.value = null
}
const updateTrigger = async () => {
    const { code, data } = await userUpdate(user.value)
    if (code > 0) {
        userStore.saveToken(data)
    }
    browse.value = true
}
</script>
<template>
    <div p='3' v-if='user' shadow='md' rounded='2' bgc-container>
        <div flex-end color-primary>
            <span @click='browse = false' select='none' cursor='pointer' v-if='browse'>编辑</span>
            <span @click='updateTrigger' select='none' cursor='pointer' v-else>完成</span>
        </div>
        <template v-if='browse'>
            <div m='y-2' flex-center>
                <avatar height='120px' width='120px'
                        :image='cos+userStore.user.avatar' />
            </div>
            <div m='x-6' text='center' v-if='user.motto' color-strong flex-center>
                {{ user.motto }}
            </div>
            <div color-disable flex-center v-else>
                这个人很懒，什么也没写
            </div>
        </template>
        <template v-else>
            <div m='y-2' h='120px' flex-center>
                <label position='relative'>
                    <avatar height='120px' width='120px' :image='cos+userStore.user.avatar' />
                    <div style='background-color: rgba(0,0,0,0.3)' rounded='full' h='120px' w='120px' flex-center
                         position-center v-ripple>
                        <i display='block' text='1.75rem' i-mdi-file-png-box text-light-900 />
                    </div>
                    <input @change='onAvatarChanged' type='file' accept='image/png' ref='inputRef' hidden>
                </label>
            </div>
            <v-form color-strong>
                <v-textarea label='个性签名' v-model='user.motto' :rows='2' max-rows='2' auto-grow color-strong />
            </v-form>
        </template>
        <v-dialog v-model='dialog' persistent>
            <div overflow='hidden' w='md:280px' m='!x-auto' border='rounded-md' bgc-container>
                <div h='280px' m='x-auto'>
                    <vue-cropper ref='cropperRef'
                                 :img='avatar'
                                 :auto-crop-height='cropperOptions.height'
                                 :auto-crop-width='cropperOptions.width'
                                 :output-size='cropperOptions.outputSize'
                                 :output-type='cropperOptions.outputType'
                                 :can-scale='cropperOptions.canScale'
                                 :can-move='cropperOptions.canMove'
                                 :auto-crop='cropperOptions.autoCrop'
                                 :fixed-box='cropperOptions.fixedBox'
                                 :fixed='cropperOptions.fixed'
                                 :fixed-number='cropperOptions.fixedNumber'
                                 :full='cropperOptions.full'
                                 :can-move-box='cropperOptions.canMoveBox'
                                 :original='cropperOptions.original'
                                 :center-box='cropperOptions.centerBox' />
                </div>
                <div m='y-2' flex-center>
                    <v-btn :loading='loading' @click='uploadTrigger' m='x-4' bgc-primary>
                        <span color-light>上传</span>
                    </v-btn>
                    <v-btn :disabled='loading' @click='cancelTrigger' m='x-4' bgc-danger>
                        <span color-light>取消</span>
                    </v-btn>
                </div>
            </div>
        </v-dialog>
    </div>
</template>
