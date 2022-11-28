<script setup>

</script>
<template>
    <div rounded='2' p='3' shadow='sm' v-ripple bgc-container flex>
        <div flex-center>
            <v-avatar size='56' bgc-success />
        </div>
        <div flex='1' p='l-2'>
            <div justify='between' flex>
                <div>
                    <div w='38' text='4' color-strong>核酸采集与检测</div>
                    <div text='3' m='y-1' color-secondary>成都生物科技</div>
                </div>
                <div text='5' color-danger>8888 ￥</div>
            </div>
            <div flex>
                <v-chip m='x-1' size='small' bgc-screen label>
                    <span color-disable>五险一金</span>
                </v-chip>
                <v-chip m='x-1' size='small' bgc-screen label>
                    <span color-disable>五险一金</span>
                </v-chip>
                <v-chip m='x-1' size='small' bgc-screen label>
                    <span color-disable>2000+</span>
                </v-chip>
            </div>
        </div>
    </div>
</template>
