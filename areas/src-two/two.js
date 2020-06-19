export default (text = '1️2. Area two js') => {
  const element = document.createElement('div')
  element.innerHTML = text
  return element
}
