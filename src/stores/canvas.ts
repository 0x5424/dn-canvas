import { get, writable, derived } from 'svelte/store'
import { writableStorage } from '../lib/writableStorage'

export const canvasWidth = writableStorage('canvas/width', 64)
export const canvasHeight = writableStorage('canvas/height', get(canvasWidth))

export const cursorX = writableStorage<void | number>('canvas/cursorX', null)
export const cursorY = writableStorage<void | number>('canvas/cursorY', null)

export const cursorIndex = derived([canvasWidth, cursorX, cursorY], ([$canvasWidth, $cursorX, $cursorY]): void | number => {
  if (!$cursorX || !$cursorY) return

  // note: canvas dimensions start at 1, but this calc needs 0 index
  return (($cursorY - 1) * $canvasWidth) + ($cursorX - 1)
})

export const workareaWidth = writable(1)

/** Number of cells to show in the workarea */
export const workareaSize = derived([canvasWidth, workareaWidth], ([$canvasWidth, $workareaWidth]) => {
  const workarea = Math.round($workareaWidth / 22) // 22px per cell

  // take lesser of these two (dont overextend actual canvas size)
  return Math.min(workarea, $canvasWidth)
})

/** "camera" to offset the visible workarea */
export const cameraX = derived([canvasWidth, cursorX, workareaSize], ([$canvasWidth, $cursorX, $workareaSize]) => {
  if (!$cursorX) return 0

  // camera should only start moving once the cursor is more than halfway past first workarea
  const cursorOffset = Math.round($workareaSize / 2)
  if ($cursorX < cursorOffset) return 0

  /**
   * max camera will go "right" is 1 full workarea size
   *
   * example:
   * + - - - - - - - +
   * |       |       |
   * |       |       | <- workarea
   * |       |_______|
   * |               |
   * |               |
   * |               |
   * + - - - - - - - +
   *
   */

  /**
   * Given the above example, assuming 16x16 and workarea of 8x8:
   * - The x column where camera stops moving is 9
   * - The camera should still stay centered until column 9 + (8 / 2) = 13
   * then the camera should stay centered until it crosses column 7
   */
  const maxX = $canvasWidth - $workareaSize

  // else, center the camera on the cursor
  if ($cursorX < maxX + cursorOffset) return $cursorX - cursorOffset

  // else, stay "sticky" on the last col
  return maxX
})

export const cameraY = derived([canvasWidth, cursorY, workareaSize], ([$canvasWidth, $cursorY, $workareaSize]) => {
  if (!$cursorY) return 0

  const cursorOffset = Math.round($workareaSize / 2)
  if ($cursorY < cursorOffset) return 0

  const maxY = $canvasWidth - $workareaSize
  if ($cursorY < maxY + cursorOffset) return $cursorY - cursorOffset

  return maxY
})
