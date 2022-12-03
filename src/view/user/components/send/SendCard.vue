<script setup>

</script>
<template>
    <div p='4' m='b-3' cursor='pointer' rounded='2' bgc-container v-ripple>
        <div flex>
            <div>
                <div w='300px'><span font='500' hover='color-primary' color-strong>Java高级开发</span></div>
                <div m='t-3' flex>
                    <div color-danger>4k-8k</div>
                    <div m='x-2' flex>
                        <v-chip h='!22px' m='x-1' size='small' bgc-screen label>
                            <span color-disable>五险一金</span>
                        </v-chip>
                        <v-chip h='!22px' m='x-1' size='small' bgc-screen label>
                            <span color-disable>五险一金</span>
                        </v-chip>
                        <v-chip h='!22px' m='x-1' size='small' bgc-screen label>
                            <span color-disable>2000+</span>
                        </v-chip>
                    </div>
                </div>
            </div>
            <div m='l-10' display='flex'>
                <v-avatar m='r-2' size='64' bgc-warning rounded />
                <div>
                    <div font='500' hover='color-primary' color-strong>阿里巴巴</div>
                    <div text='14px' color-normal>杭州市-高新区</div>
                </div>
            </div>
        </div>
        <div m='t-1' items='center' flex-between>
            <div flex-center>
                <v-avatar size='36' bgc-success />
                <div m='x-4' color-normal>赵先生</div>
            </div>
            <v-btn height='24px' variant='flat' bgc-primary>
                <span text='3' color-light>立即沟通</span>
            </v-btn>
        </div>
    </div>
</template>
