import { ref, watch, computed, nextTick } from 'vue'
export default function useFixed (props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const listHeights = ref([])
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distence = ref(0)

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) return ''

    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })
  const fixedStyle = computed(() => {
    const distenceVal = distence.value
    const diff = (distenceVal > 0 && distenceVal < TITLE_HEIGHT) ? distenceVal - TITLE_HEIGHT : 0
    return {
      transform: `translate3d(0, ${diff}px, 0)`
    }
  })
  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })
  watch(scrollY, (newY) => {
    const listHeightsVal = listHeights.value
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const listHeightTop = listHeightsVal[i]
      const listHeightBottom = listHeightsVal[i + 1]
      if (newY >= listHeightTop && newY < listHeightBottom) {
        currentIndex.value = i
        distence.value = listHeightBottom - newY
      }
    }
  })
  function calculate () {
    const list = groupRef.value.children
    const listHeightsVal = listHeights.value
    let height = 0

    listHeightsVal.length = 0
    listHeightsVal.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHeightsVal.push(height)
    }
  }
  function onScroll (pos) {
    scrollY.value = -pos.y
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
    currentIndex
  }
}
