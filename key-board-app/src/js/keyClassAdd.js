const keyClassAdd = (element) => {
  const keyKind = [];
  if (element === 'Backspace') {
    keyKind.push('key__backspace', 'font-size-zero')
  }
  if (element === 'Tab') {
    keyKind.push('key__tab', 'font-size-zero')
  }
  if (element === 'CapsLock') {
    keyKind.push('key__capslock', 'font-size-zero')
  }
  if (element === 'Enter') {
    keyKind.push('key__enter', 'font-size-zero')
  }
  if (element === 'ShiftLeft') {
    keyKind.push('key__shift-left', 'font-size-zero')
  }
  if (element === 'ShiftRight') {
    keyKind.push('key__shift-right', 'font-size-zero')
  }
  if (element === 'MetaLeft' || element === 'MetaRight') {
    keyKind.push('key__alt')
  }
  if (element === 'Space') {
    keyKind.push('key__space','font-size-zero')
  }
  if (element === 'ArrowRight' || element === 'ArrowLeft') {
    keyKind.push('key__arrow-bottom', 'font-size-zero')
  }
  if (element === 'ArrowUp') {
    keyKind.push('key__arrow-up', 'font-size-zero')
  }
  if (element === 'ArrowDown') {
    keyKind.push('key__arrow-down', 'font-size-zero')
  }
  return keyKind
}

export default keyClassAdd
