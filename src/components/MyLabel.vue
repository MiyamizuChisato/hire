<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div m='y-5'>
        <span border='l-4 primary' rounded='full' text='5' m='r-2'></span>
        <span text='5' font='600' color-strong>{{ label }}</span>
    </div>
</template>
