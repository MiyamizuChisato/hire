<script setup>
import InfoItem from './InfoItem.vue'

</script>
<template>
    <div m='y-3' p='4' rounded='2' shadow='md' bgc-container>
        <info-item label='邮箱' index='email' />
        <info-item label='昵称' index='nickname' />
    </div>
</template>