<script setup>

</script>
<template>
  <div shadow="lg" rounded='2' p='3' v-ripple bgc-container flex>
    <div flex-center>
      <v-avatar size="56" bgc-success />
    </div>
    <div flex>
      <div p='x-3'>
        <div text='5' color-normal>核酸采集与检测</div>
        <div m="y-1" color-secondary>成都生物科技</div>
        <v-chip-group>
          <v-chip size="small" bgc-screen label>
            <span color-disable>五险一金</span>
          </v-chip>
          <v-chip size="small" bgc-screen label>
            <span color-disable>2000+</span>
          </v-chip>
        </v-chip-group>
      </div>
      <div text='5' color-danger>8888 ￥</div>
    </div>
  </div>
</template>
