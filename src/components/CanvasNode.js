import React, { useRef, useImperativeHandle, forwardRef, useState, useEffect } from "react"
// canvas通用画布
function CanvasNode (props, ref) {
  const CANVAS_WIDTH = props.width || 1200
  const CANVAS_HEIGHT = props.height || 600
  const [ctx, setCtx] = useState(null)
  // canvas样式
  const [style, setStyle] = useState({
    backgroundColor: '#fff'
  })
  // 返回组件的引用
  const canvasRef = useRef(null)
  // 将子组件内容暴露给父组件
  useImperativeHandle(ref, () => {
    return {
      ctx: canvasRef.current.getContext('2d'),
      drawGrid,
      clearRect
    }
  })

  useEffect(() => {
    setCtx(canvasRef.current.getContext('2d'))
  })

  return <canvas id='canvas' style={style} ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT}></canvas>
}
// 绘制网格线
function drawGrid (context, color, stepx, stepy) {
  context.strokeStyle = color
  context.lineWidth = 0.5
  for (let i = stepx + 0.5; i < context.canvas.width; i += stepx) {
    context.beginPath()
    context.moveTo(i, 0)
    context.lineTo(i, context.canvas.height)
    context.stroke()
  }

  for (let i = stepy + 0.5; i < context.canvas.height; i += stepy) {
    context.beginPath()
    context.moveTo(0, i)
    context.lineTo(context.canvas.width, i)
    context.stroke()
  }
}

function clearRect (context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
}

export default forwardRef(CanvasNode)