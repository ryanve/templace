/** @preserve npm.im/templace */
!function(root, name, api) {
  typeof module != "undefined" && module.exports ? module.exports = api : root[name] = api
  typeof document == "undefined" || api("querySelector" in document)
}(this, "templace", function(selectable) {
  if (!selectable) return;
  do {
    var template = document.querySelector("template[data-templace]")
    if (!template) break
    if (!("content" in template)) break
    var fragment = template.content.cloneNode(true)
    template.parentNode.insertBefore(fragment, template)
    template.removeAttribute("data-templace")
  } while (template)
});
