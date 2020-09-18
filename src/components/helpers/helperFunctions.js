export function createElement (tag, className, elementId, appendTo) {
  const element = document.createElement(tag)
  if (className) element.className = className
  if (elementId) element.id = elementId
  if (appendTo) appendTo.append(element)
  return element
}
