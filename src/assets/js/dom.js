export function addClass (el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

export function removeClass (el, className) {
  el.classList.remove(className)
}

const obj = {
  a: 1,
  fn () {
    console.log(this)
  }
}
const fn2 = obj.fn
obj.fn()
fn2()
