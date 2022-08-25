import keys from './keys'

const keysType = (register, CapsLock = false) => {
  let i = 0
  if (CapsLock) {
    i = 13
  }
  const letters = document.querySelectorAll('.key')
  for (i; i < letters.length; i += 1) {
    const secondClass = letters[i].className.split(' ')[1]
    letters[i].textContent = keys[secondClass][register]
  }
}

export default keysType
