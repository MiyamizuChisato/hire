<script setup>
</script>
<template>
    <div m='b-4' p='y-2' rounded='2' flex-between v-ripple>
        <div cursor='pointer' hover='color-primary' m='x-2' items='center' color-normal flex>
            <v-avatar m='x-1' size='36' bgc-screen />
            <div m='x-1'>赵先生</div>
        </div>
        <div m='x-2' items='center' flex>
            <v-btn m='x-1' size='small' variant='flat' bgc-primary><span color-light>简历</span></v-btn>
            <v-btn m='x-1' size='small' variant='flat' bgc-warning><span color-light>沟通</span></v-btn>
            <v-btn m='x-1' size='small' variant='flat' bgc-success><span color-light>通过</span></v-btn>
            <v-btn m='x-1' size='small' variant='flat' bgc-danger><span color-light>不合格</span></v-btn>
        </div>
    </div>
</template>
