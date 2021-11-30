import React, { useEffect, useRef } from 'react'
import CanvasNode from '../../components/CanvasNode'

export default function Path () {
  let ctxRef = useRef()
  let ctx = null
  useEffect(() => {
    // 获取子组件canvas作用域
    const {ctx, drawGrid, clearRect} = ctxRef.current
    draw(ctx, drawGrid, clearRect)
  })
  return <CanvasNode ref={ctxRef} />
}

function draw (context, drawGrid, clearRect) {
  clearRect(context)
  context.fillStyle = 'goldenrod'
  drawGrid(context, 'lightgray', 10, 10)
  context.save()

  context.shadowColor = 'rgba(200, 200, 0, .5)'
  context.shadowOffsetX = 12
  context.shadowOffsetY = 12
  context.shadowBlur = 15

  drawCutouts(context)
  strokeCutotsShapes(context)
  context.restore()
}

function drawCutouts (context) {
  context.beginPath()
  addOuterRectanglePath(context)
  addCirclePath(context)
  addRectanglePath(context)
  addTrianglePath(context)
  context.fill()
}

function strokeCutotsShapes (context) {
  context.save()
  context.strokeStyle = 'rgba(0, 0, 0, .7)'
  context.beginPath()
  addOuterRectanglePath(context)
  context.stroke()
  context.beginPath()
  addCirclePath(context)
  addRectanglePath(context)
  addTrianglePath(context)
  context.stroke()
  context.restore()
}

function rect (context, x, y, w, h, direction) {
  if (direction) {
    context.moveTo(x, y)
    context.lineTo(x, y + h)
    context.lineTo(x + w, y + h)
    context.lineTo(x + w, y)
    context.closePath()
  } else {
    context.moveTo(x, y)
    context.lineTo(x + w, y)
    context.lineTo(x + w, y + h)
    context.lineTo(x, y + h)
    context.closePath()
  }
}

function addOuterRectanglePath (context) {
  context.rect(110, 25, 370, 335)
}

function addCirclePath (context) {
  context.arc(300, 300, 40, 0, Math.PI * 2, true)
}

function addRectanglePath (context) {
  rect(context, 310, 55, 70, 35, true)
}

function addTrianglePath (context) {
  context.moveTo(400, 200)
  context.lineTo(250, 115)
  context.lineTo(200, 200)
  context.closePath()
}