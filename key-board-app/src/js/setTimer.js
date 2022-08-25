
let click = 0
let firstClick
let secondClick
let thirdClick

const setTimer = () => {
  click++
  if (click === 1) {
    firstClick = Date.now()
  }
  if (click === 2) {
    secondClick = Date.now()
    if (secondClick - firstClick > 2000) {
      firstClick = 0
      click = 0
      return false
    } 
  }
  if (click === 3) {
    thirdClick = Date.now()
    if ((thirdClick - firstClick) < 3500) {

      click = 0
      firstClick = 0
      secondClick = 0
      thirdClick = 0

      return true 
    } else {
      firstClick = 0
      secondClick = 0
      thirdClick = 0
    }
  }
}
export default setTimer