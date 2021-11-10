/** @preserve npm.im/templace */
!function(that) {
  function noop() {}
  function loop() {
    var plate
    var clone
    do {
      plate = document[next](place)
      if (!plate) break
      if (!("content" in plate)) break
      clone = plate.content.cloneNode(true)
      plate.parentNode.insertBefore(clone, plate)
      plate.removeAttribute(data)
    } while (plate)
  }
  var name = "templace"
  var dom = typeof document != "undefined"
  var next = "querySelector"
  var data = "data-templace"
  var place = "template[data-templace]"
  var active = dom && next in document
  var api = active ? loop : noop
  var common = typeof module != "undefined"
  common && module.exports
    ? module.exports = api
    : that[name] = api
  api()
}(this);
