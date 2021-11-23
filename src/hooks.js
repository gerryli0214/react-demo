import React, { useState, useEffect } from 'react'

// function中使用状态信息
export function Example () {
  const [ count, setCount ] = useState(0)
  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return function cleanUp () {
      console.log('This is a clean function')
    }
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}