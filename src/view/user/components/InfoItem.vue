<script setup>
import { inject } from 'vue'

defineProps({
    label: {
        type: String,
        required: true
    },
    modelValue: String,
    index: {
        type: String,
        required: true
    }
})
const user = inject('user')
</script>
<template>
    <div p='3' color-normal flex-between>
        <template v-if='false'>
            <div p='r-4' color-secondary>{{ label }}</div>
            <div color-normal>{{ user[index] }}</div>
        </template>
        <v-text-field :label='label' v-model='user["email"]' density='compact' variant='underlined' transition-duration v-else />
    </div>
</template>
