<script setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { computed, ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    }
})
const emits = defineEmits(['update:modelValue'])
const NormalToolbar = MdEditor.NormalToolbar
const preview = ref(false)
const previewToggle = () => {
    preview.value = !preview.value
}
const previewDisplay = computed(() => {
    if (preview.value) {
        return {
            editor: 'none',
            preview: 'block',
            icon: 'i-mdi-file-edit',
            mode: '预览',
            iconTitle: '编辑'
        }
    }
    return {
        editor: 'block',
        preview: 'none',
        icon: 'i-mdi-eye',
        mode: '编辑',
        iconTitle: '预览'
    }
})
const toolbars = ['bold', 'underline', 'italic', 'strikeThrough', 'sup', 'sub', 0]
const text = computed({
    get: () => props.modelValue,
    set: (value) => emits('update:modelValue', value)
})
</script>
<template>
    <div class='markdown-editor markdown-viewer' rounded='1' overflow='hidden' color-normal bgc-screen>
        <md-editor v-model='text' :toolbars='toolbars' h='!400px' border='!none' :placeholder='placeholder'>
            <template #defToolbars>
                <normal-toolbar :title='previewDisplay.iconTitle' @on-click='previewToggle'>
                    <template #trigger>
                        <div h='24px' w='24px' flex-center>
                            <i text='5' :class='previewDisplay.icon' />
                        </div>
                    </template>
                </normal-toolbar>
            </template>
        </md-editor>
    </div>
</template>
<style>
:root {
    --c-bg-bar: #fff;
    --c-editor-container: #f5f5f5;
    --c-editor-text: #000;
    --c-select-bar: rgba(235, 235, 235, 1);
    --c-editor-toolbar: #e0e0e0;
}

html.dark {
    --c-bg-bar: #3e4550;
    --c-select-bar: rgba(255, 255, 255, 0.1);
    --c-editor-container: #2d2f31;
    --c-editor-toolbar: #5f5f5f;
    --c-editor-text: #fff;
}

.markdown-editor {
    overflow: hidden;
}

.md-editor-content {
    display: block;
    background-color: var(--c-editor-container);
}

#md-editor-v3-toolbar-wrapper {
    border: none;
    background-color: var(--c-editor-toolbar) !important;
}

.md-editor-footer {
    border: none;
    background-color: var(--c-editor-toolbar) !important;
}

.markdown-editor #md-editor-v3-textarea {
    color: var(--c-editor-text);
    height: 340px;
    display: v-bind(previewDisplay ['editor']) !important;
}

.markdown-editor .md-editor-preview-wrapper {
    height: 340px;
    display: v-bind(previewDisplay ['preview']) !important;
}

.markdown-editor #md-editor-v3-textarea {
    padding: 10px;
    font-size: 14px;
    line-height: 1.5;
    overflow-y: auto;
    border-top: none;
}

.markdown-editor .md-toolbar-wrapper {
    height: 42px;
    background-color: var(--c-bg-bar);
}

.markdown-editor .md-toolbar {
    min-width: 0 !important;
}

.markdown-editor .md-footer {
    display: none;
}
.markdown-editor .md-toolbar-item {
    padding: 3px;
    margin: 0 2px;
    border-radius: 4px !important;
}

.markdown-editor .md-toolbar-item:hover {
    background-color: var(--c-select-bar)
}

.markdown-editor #md-editor-v3-preview {
    padding: 0 10px;
}
</style>