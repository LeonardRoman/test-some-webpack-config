export default (text = '1️1. Area one js') => {
  // import('./TestComponent')
  const element = document.createElement('div')
  element.innerHTML = text
  return element

}
