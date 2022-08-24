import keysType from "./keysType"
import isLangChange from "./isLangChange"


const functionsKey = {
  optionFlag: false,
  register: 0,
  capsLockFlag: false,
  capsLock() {
    this.capsLockFlag = !this.capsLockFlag
  },
  action(eCode, action) {
    if (eCode === 'CapsLock' && (action === 'keydown' || action === 'keyup' || action === 'mousedown')) {
      this.capsLock()

      if (this.capsLockFlag) {
        document.querySelector(`.${eCode}`).classList.add('active')
        if (this.register === 0) {
          this.register = 1
          keysType(this.register)
        }
        if (this.register === 2) {
          this.register = 3
          keysType(this.register)
        }
      } else {
        document.querySelector(`.${eCode}`).classList.remove('active')
        if (this.register === 1) {
          this.register = 0
          keysType(this.register)
        } else {
          this.register = 2
          keysType(this.register)
        }
      }
    }

    if (action === 'keydown') {
      if (eCode === 'ShiftLeft' || eCode === 'ShiftRight') {
        if (this.register === 0) {
          this.register = 1
          keysType(this.register)
        }
        if (this.register === 2) {
          this.register = 3
          keysType(this.register)
        }
      }
      if (eCode === 'AltLeft' || eCode === 'AltRight') {
        this.optionFlag = true
      }
      if (this.optionFlag && eCode === 'Space' && this.register !== 2) {
        this.register = 2
        keysType(this.register)
      }
      if (this.optionFlag && eCode === 'Space' && this.register === 2 && isLangChange()) {
        this.register = 0
        keysType(this.register)
      }
    }

    if (action === 'keyup') {
      if (eCode === 'ShiftLeft' || eCode === 'ShiftRight') {
        if (this.register === 1) {
          this.register = 0
          keysType(this.register)
        } else {
          this.register = 2
          keysType(this.register)
        }
      }
      if (eCode === 'AltLeft' || eCode === 'AltRight') {
        this.optionFlag = false
      }
    }

    if (action === 'mousedown') {

      if (eCode === 'ShiftLeft' || eCode === 'ShiftRight') {
        if (this.register === 0) {
          this.register = 1
          keysType(this.register)
        }
        if (this.register === 2) {
          this.register = 3
          keysType(this.register)
        }
      }
    }

    if (action === 'mouseup') {

      if (eCode === 'ShiftLeft' || eCode === 'ShiftRight') {
        if (this.register === 1) {
          this.register = 0
          keysType(this.register)
        }
        if (this.register === 3) {
          this.register = 2
          keysType(this.register)
        }
      }
    }
  }
}

export default functionsKey