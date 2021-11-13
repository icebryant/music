<template>
  <m-header></m-header>
  <Tab/>
  <router-view></router-view>
  <player></player>
</template>
<script>
import Header from '@/components/header/header'
import Player from '@/components/player/player'
import Tab from '@/components/tab/tab'
export default {
  components: {
    MHeader: Header,
    Player,
    Tab
  }
}
</script>
<style lang="scss">

</style>
