import { get } from './base'
export function getSingerList () {
  return get('./api/getSingerList')
}
export function getSingerDetail (singer) {
  console.log(singer)
  return get('./api/getSingerDetail', {
    mid: singer.mid
  })
}
