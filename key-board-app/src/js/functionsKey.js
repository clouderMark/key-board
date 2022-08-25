import keysType from './keysType'
import setTimer from './setTimer'
import isLangChange from './isLangChange'

const functionsKey = {
  register: 0,
  capsLockFlag: false,
  capsLock() {
    this.capsLockFlag = !this.capsLockFlag
  },
  action(eCode, action) {
    if (
      eCode === 'CapsLock' &&
      (action === 'keydown' || action === 'keyup' || action === 'mousedown')
    ) {
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
     

      if ((eCode === 'AltLeft' || eCode === 'AltRight') && setTimer()) {
        this.register = isLangChange()
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
      if ((eCode === 'AltLeft' || eCode === 'AltRight') && setTimer()) {
        this.register = isLangChange()
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
  },
}

export default functionsKey
