<script setup>

import MyLabel from '../../components/MyLabel.vue'
import MarkdownEditor from '../../components/MarkdownEditor.vue'
import { ref } from 'vue'

const text = ref('')
</script>
<template>
    <div rounded='2' m='y-5' p='4' bgc-container>
        <my-label label='认证新的公司' />

        <v-form color-normal>
            <div>
                <v-text-field prepend-icon='i-mdi-notebook' density='compact' label='公司名称' />
            </div>
            <div>
                <v-text-field density='compact' prepend-icon='i-mdi-google-nearby' label='公司地点' />
            </div>
            <div>
                <v-file-input density='compact' prepend-icon='i-mdi-image-filter-vintage'
                              label='公司LOGO(上传PNG格式的LOGO)' />
            </div>
            <div>
                <v-file-input density='compact' prepend-icon='i-mdi-compass-outline'
                              label='认证文件(让我们确认信息真实性)' />
            </div>
            <div>
                <markdown-editor v-model='text' placeholder='请输入公司简介(支持markdown语法)' />
            </div>
            <div>
                <v-btn variant='flat' bgc-primary>
                    <span color-light>提交</span>
                </v-btn>
            </div>
        </v-form>
    </div>
</template>
