/** @preserve npm.im/templace */
!function(that) {
  function api() {
    var sup
    var plate
    var clone
    var l = live.length
    var i = 0
    var d = 0
    while (i < l) {
      plate = live[i++]
      sup = sup || "content" in plate
      if (!sup) break
      if (!plate.hasAttribute(data)) continue
      clone = plate.content.cloneNode(true)
      plate.parentNode.insertBefore(clone, plate)
      plate.removeAttribute(data)
      d++
    }
    return d
  }
  var name = "templace"
  var data = "data-templace"
  var tag = "getElementsByTagName"
  var ufo = typeof document == "undefined"
  var live = ufo || document[tag]("template")
  var common = typeof module != "undefined"
  common && module.exports
    ? module.exports = api
    : that[name] = api
  api()
}(this);
