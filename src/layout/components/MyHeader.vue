<script setup>
import NavMenu from './NavMenu.vue'
import NavSetting from './NavSetting.vue'
import NavLogo from './NavLogo.vue'
</script>
<template>
    <header shadow='md' position='sticky' top='0' w='screen' flex-center bgc-container z-10>
        <nav-logo />
        <nav-menu />
        <nav-setting />
    </header>
</template>
