import React, { useEffect, useRef, useState } from 'react'
import CanvasNode from '../../components/CanvasNode'

export default function Line () {
  let ctxRef = useRef()
  let [ctx, setCtx] = useState(null)
  useEffect(() => {
    // 获取子组件canvas作用域
    setCtx(ctxRef.current.ctx)
  })
  return <CanvasNode ref={ctxRef} />
}