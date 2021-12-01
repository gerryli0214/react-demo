import React from "react"; 
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Line from '../views/canvas/line'
import Path from '../views/canvas/path'
import Text from '../views/canvas/text'
import App from '../views/app'

export const routes = [
  {
    path: '/path',
    name: '路径',
    componenet: <Path />
  },
  {
    path: '/line',
    name: '线段',
    componenet: <Line />
  },
  {
    path: '/text',
    name: '文本',
    componenet: <Text />
  }
]

const routeList = routes.map(vv => <Route path={vv.path} element={vv.componenet} key={vv.path}/>)

export default function RouterView () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          { routeList }
          <Route path="/" element={<Navigate to="/path" />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}