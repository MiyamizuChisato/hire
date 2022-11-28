<script setup>
import NavMenu from './NavMenu.vue'
import NavSetting from './NavSetting.vue'
import NavLogo from './NavLogo.vue'
import { headerController } from '../../hooks/headerController.js'
import { computed } from 'vue';
// START=============================导航栏控制
const headerStatus = headerController()
const headerClass = computed(() => {
    if (headerStatus.value) {
        return 'top-0'
    }
    return 'top--20'
})
// END==============================导航栏控制
</script>
<template>
    <header :class='headerClass' position='sticky' w='screen' flex-center bgc-screen z-10>
        <nav-logo />
        <nav-menu />
        <nav-setting />
    </header>
</template>
