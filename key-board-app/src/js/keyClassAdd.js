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
    keyKind.push('key__enter')
  }
  if (element === 'ShiftLeft') {
    keyKind.push('key__shift-left', 'font-size-zero')
  }
  if (element === 'ShiftRight') {
    keyKind.push('key__shift-right', 'font-size-zero')
  }
  if (element === 'MetaLeft' || element === 'MetaRight') {
    keyKind.push('key__command')

    if (element === 'MetaRight') {
      keyKind.push('key__command-right')
    }
  }
  if (element === 'Space') {
    keyKind.push('key__space', 'font-size-zero')
  }
  if (element === 'ArrowRight' || element === 'ArrowLeft' || element === 'ArrowUp' || element === 'ArrowDown') {
    keyKind.push('font-size-zero')
    if (element === 'ArrowRight') {
      keyKind.push('key__arrow-bottom', 'key__arrow-right')
    }
    if (element === 'ArrowLeft') {
      keyKind.push('key__arrow-bottom', 'key__arrow-left')
    }
    if (element === 'ArrowUp') {
      keyKind.push('key__arrow-up')
    }
    if (element === 'ArrowDown') {
      keyKind.push('key__arrow-down')
    }
  }
  if (element === 'ControlLeft') {
    keyKind.push('key__control')
  }
  if (element === 'AltLeft' || element === 'AltRight') {
    keyKind.push('key__option')
    if (element === 'AltRight') {
      keyKind.push('key__option-right')
    }
  }

  return keyKind
}

export default keyClassAdd
