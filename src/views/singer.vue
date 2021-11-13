<template>
  <div class="singers" v-loading='!singers.length'>
    <index-list :data='singers' @select='selectSinger'></index-list>
    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" :data="selectedSinger"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import IndexList from '@/components/base/index-list/index-list'
import { getSingerList } from '@/service/singer'
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant'
export default {
  name: 'singer',
  components: {
    IndexList
  },
  data () {
    return {
      selectedSinger: null,
      singers: []
    }
  },
  async created () {
    const result = await getSingerList()
    console.log(result)
    this.singers = result.singers
  },
  methods: {
    selectSinger (singer) {
      this.selectedSinger = singer
      this.cacheSinger(singer)
      this.$router.push({ path: `/singer/${singer.mid}` })
    },
    cacheSinger (singer) {
      storage.session.set(SINGER_KEY, singer)
    }
  }
}
</script>

<style lang="scss" scoped>
 .singers{
   position: fixed;
   width: 100%;
   top: 88px;
   bottom: 0;
 }
</style>
