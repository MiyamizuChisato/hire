<script setup>

</script>
<template>
    <div p='3' rounded='2' shadow='md' bgc-container>
        <div flex-end color-primary>
            <span cursor='pointer' v-if='true'>编辑</span>
            <span cursor='pointer' v-else>完成</span>
        </div>
        <div m='y-2' flex-center>
            <v-avatar bgc-primary size='120'>1</v-avatar>
        </div>
        <div flex-center>Never Let You Down</div>
    </div>
</template>
