import { get, derived } from 'svelte/store'
import { writableStorage } from '../lib/writableStorage'

export const canvasWidth = writableStorage('canvas/width', 64)
export const canvasHeight = writableStorage('canvas/height', get(canvasWidth))

export const cursorX = writableStorage<void | number>('canvas/cursorX', null)
export const cursorY = writableStorage<void | number>('canvas/cursorY', null)


export const position = derived([canvasWidth, cursorX, cursorY], ([$canvasWidth, $cursorX, $cursorY]): void | number => {
  if (!$cursorX || !$cursorY) return

  return ($cursorY * $canvasWidth) * $cursorX
})
