import keysType from './keysType'

let flag = true
let register
const isLangChange = () => {
  flag = !flag
  if (!flag) {
    register = 2
    keysType(register)
  }
  if (flag) {
    register = 0
    keysType(register)
  }
  return register
}

export default isLangChange
