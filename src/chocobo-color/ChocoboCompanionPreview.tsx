import React, { useEffect, useRef, useState } from 'react'
import { Color } from './ffxiv-chocobo-color'

type Bounds = {
  x: number,
  y: number,
  width: number,
  height: number
}

const CHOCOBO_BOUNDS: Bounds = {
  x: 11,
  y: 3,
  width: 135,
  height: 173
}

const SADDLE_BOUNDS: Bounds = {
  x: 148,
  y: 0,
  width: 88,
  height: 121
}

const FEET_BOUNDS: Bounds = {
  x: 151,
  y: 128,
  width: 81,
  height: 74
}

function addImageData (source: ImageData, imageData: ImageData, x: number, y: number) {
  for (let i = 0; i < imageData.width; ++i) {
    for (let j = 0; j < imageData.height; ++j) {
      const u = x + i
      const v = y + j
      const sD = source.data
      const nD = imageData.data
      const sI = (v * source.width + u) * 4
      const nI = (j * imageData.width + i) * 4
      const [sR, sG, sB, sA] = [sD[sI + 0] / 255, sD[sI + 1] / 255, sD[sI + 2] / 255, sD[sI + 3] / 255]
      const [nR, nG, nB, nA] = [nD[nI + 0] / 255, nD[nI + 1] / 255, nD[nI + 2] / 255, nD[nI + 3] / 255]
      const a = (1 - (1 - nA) * (1 - sA))

      sD[sI + 0] = (nR * nA / a + sR * sA * (1 - nA) / a) * 255
      sD[sI + 1] = (nG * nA / a + sG * sA * (1 - nA) / a) * 255
      sD[sI + 2] = (nB * nA / a + sB * sA * (1 - nA) / a) * 255
      sD[sI + 3] = a * 255
    }
  }
  console.log(source)
}

function drawChocobo (ctx: CanvasRenderingContext2D, imageData: { chocobo: ImageData, saddle: ImageData, feet: ImageData }, color: Color) {
  const chocoboImageData = ctx.createImageData(136, 219)

  const stainedChocoboImageData = ctx.createImageData(imageData.chocobo)
  for (let i = 0; i < stainedChocoboImageData.data.length; i += 4) {
    stainedChocoboImageData.data[i + 0] = imageData.chocobo.data[i + 0] / 255 * color.R
    stainedChocoboImageData.data[i + 1] = imageData.chocobo.data[i + 1] / 255 * color.G
    stainedChocoboImageData.data[i + 2] = imageData.chocobo.data[i + 2] / 255 * color.B
    stainedChocoboImageData.data[i + 3] = imageData.chocobo.data[i + 3]
  }

  addImageData(chocoboImageData, stainedChocoboImageData, 1, 0)
  addImageData(chocoboImageData, imageData.saddle, 0, 3)
  addImageData(chocoboImageData, imageData.feet, 17, 145)
  return chocoboImageData
}

type Props = {
  color: Color
}

const ChocoboCompanionPreview = ({ color }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imageData, setImageData] = useState<{ chocobo: ImageData, saddle: ImageData, feet: ImageData } | null>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const image = new Image()
    image.addEventListener('load', () => {
      canvas.width = image.width
      canvas.height = image.height
      ctx.drawImage(image, 0, 0, image.width, image.height)
      setImageData({
        chocobo: ctx.getImageData(CHOCOBO_BOUNDS.x, CHOCOBO_BOUNDS.y, CHOCOBO_BOUNDS.width, CHOCOBO_BOUNDS.height),
        saddle: ctx.getImageData(SADDLE_BOUNDS.x, SADDLE_BOUNDS.y, SADDLE_BOUNDS.width, SADDLE_BOUNDS.height),
        feet: ctx.getImageData(FEET_BOUNDS.x, FEET_BOUNDS.y, FEET_BOUNDS.width, FEET_BOUNDS.height)
      })
    }, false)
    image.src = '/images/chocobo-color/chocobo-companion.png'
  }, [])

  useEffect(() => {
    if (imageData) {
      const ctx = canvasRef.current.getContext('2d')
      ctx.putImageData(drawChocobo(ctx, imageData, color), 0, 0)
    }
  }, [imageData, color])

  if (!imageData) {
    return <div>Loading...</div>
  } else {
    return (
      <canvas ref={canvasRef} width={136} height={219} />
    )
  }
}

export default ChocoboCompanionPreview
