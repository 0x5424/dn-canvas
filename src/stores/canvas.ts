import { get } from 'svelte/store'
import { writableStorage } from '../lib/writableStorage'

export const canvasWidth = writableStorage('canvas/width', 64)
export const canvasHeight = writableStorage('canvas/height', get(canvasWidth))

