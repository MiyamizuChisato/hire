<script setup>
import NavMenu from './NavMenu.vue'
import NavSetting from './NavSetting.vue'
import NavLogo from './NavLogo.vue'
import { headerController } from '../../hooks/headerController.js'

const headerSwitch = headerController()
</script>
<template>
    <header :class='headerSwitch?`top-0`:`top--20`' position='sticky' w='screen'
            transition-duration flex-center bgc-screen z-10>
        <nav-logo />
        <nav-menu />
        <nav-setting />
    </header>
</template>