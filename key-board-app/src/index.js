import keys from '@/js/keys'
import '@/styles/index.scss'
import keyClassAdd from '@/js/keyClassAdd'
import functionsKey from '@/js/functionsKey'

const textArea = document.createElement('textarea')
textArea.classList.add('text-area')
textArea.placeholder = 'для смены языка кликните option  трижды'

let content = ''

const keyBoard = document.createElement('div')
keyBoard.classList.add('key-board')

Object.keys(keys).forEach((i) => {
  const letter = document.createElement('div')
  letter.classList.add('key', i, ...keyClassAdd(i))

  letter.textContent = keys[i][0]

  letter.addEventListener('mousedown', () => {
    if (i !== 'CapsLock') {
      letter.classList.add('active')
    }

    content += letter.textContent
    if (i === 'Backspace') {
      content = content.slice(0, content.length - 1)
    }

    textArea.textContent = content

    functionsKey.action(i, 'mousedown')
  })

  letter.addEventListener('mouseup', () => {
    if (i !== 'CapsLock') {
      letter.classList.remove('active')
    }

    functionsKey.action(i, 'mouseup')
  })
  keyBoard.append(letter)
})

window.addEventListener('keydown', (e) => {
  e.preventDefault()
  if (e.code !== 'CapsLock') {
    keyBoard.querySelector(`.${e.code}`).classList.add('active')
  }
  content += keys[e.code][functionsKey.register]
  if (e.code === 'Backspace') {
    content = content.slice(0, content.length - 1)
  }

  textArea.textContent = content

  functionsKey.action(e.code, 'keydown')
})

window.addEventListener('keyup', (e) => {
  keyBoard.querySelector(`.${e.code}`).classList.remove('active')

  functionsKey.action(e.code, 'keyup')
})

const app = document.querySelector('#root')
app.append(textArea, keyBoard)
