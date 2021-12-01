import React, { useRef, useEffect, useState } from "react"
import CanvasNode from "../../components/CanvasNode"

export default function Text () {
  const ctxRef = useRef(null)
  const [ text, setText ] = useState('你好')
  const [ isFill, setIsFill ] = useState(true)
  const [ isStroke, setIsStroke ] = useState(false)
  const [ isShadow, setIsShadow ] = useState(false)
  let ctx = null
  let clearRect = null
  useEffect(() => {
    ctx = ctxRef.current.ctx
    clearRect = ctxRef.current.clearRect
    draw(ctx, clearRect, { isFill, isStroke, isShadow, text })
  })

  function onFillChange (e) {
    let value = e.target.checked
    setIsFill(value)
    draw(ctx, clearRect, { isFill: value, isStroke, isShadow, text })
  }

  function onStrokeChange (e) {
    let value = e.target.checked
    setIsStroke(value)
    draw(ctx, clearRect, { isFill, isStroke: value, isShadow, text })
  }

  function onShadowChange (e) {
    let value = e.target.checked
    setIsShadow(value)
    draw(ctx, clearRect, { isFill, isStroke, isShadow: value, text })
  }

  function onTextChange (e) {
    let value = e.target.value
    setText(value)
    draw(ctx, clearRect, { isFill, isStroke, isShadow, text: value })
  }

  return <div className='canvas-container'>
    <div className='form-container'>
      <label htmlFor='text'>绘制文本：</label>
      <input type='text' id='text' maxLength='20' value={ text } onChange={ onTextChange } />
      <input type='checkbox' checked={ isFill } onChange={ onFillChange } />文本填充
      <input type='checkbox' checked={ isStroke } onChange={ onStrokeChange } />文本描边
      <input type='checkbox' checked={ isShadow } onChange={ onShadowChange } />文本阴影
    </div>
    <CanvasNode ref={ctxRef} />
  </div>
}

function draw (context, clearRect, model) {
  context.font = '128px Palatino'
  context.lineWidth = 1.0
  context.fillStyle = 'cornflowerblue'
  clearRect(context)
  drawBackground(context)
  if (model.isShadow) {
    turnShadowsOn(context)
  } else {
    turnShadowsOff(context)
  }
  
  drawText(context, model)
}

function drawBackground (context) {
  const STEP_Y = 12
  const TOP_MARGIN = STEP_Y * 4
  const LEFT_MARGIN = STEP_Y * 3
  let i = context.canvas.height
  // Horizontal line
  context.strokeStyle = 'lightgray'
  context.lineWidth = 0.5
  while (i > TOP_MARGIN) {
    context.beginPath()
    context.moveTo(0, i)
    context.lineTo(context.canvas.width, i)
    context.stroke()
    i -= STEP_Y
  }
  // vertical line
  context.strokeStyle = 'rgba(100, 0, 0, .3)'
  context.lineWidth = 1
  context.beginPath()
  context.moveTo(LEFT_MARGIN, 0)
  context.lineTo(LEFT_MARGIN, context.canvas.height)
  context.stroke()
}

function turnShadowsOn (context) {
  context.shadowColor = 'rgba(0, 0, 0, .8)'
  context.shadowOffsetX = 5
  context.shadowOffsetY = 5
  context.shadowBlur = 10
}

function turnShadowsOff (context) {
  context.shadowColor = undefined
  context.shadowOffsetX = 0
  context.shadowOffsetY = 0
  context.shadowBlur = 0
}

function drawText (context, model) {
  const TEXT_X = 65
  const TEXT_Y = context.canvas.height / 2 + 35
  context.strokeStyle = 'blue'
  if (model.isFill) context.fillText(model.text, TEXT_X, TEXT_Y)
  if (model.isStroke) context.strokeText(model.text, TEXT_X, TEXT_Y)
}