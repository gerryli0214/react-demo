import React from "react"
import { Link, Outlet } from 'react-router-dom'
import { routes } from '../router'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      routes
    }
  }

  getSubMenu () {
    return this.state.routes
      .filter(vv => vv.path !== '/')
      .map(vv => <Link className='menu-item' to={vv.path} key={vv.path}>{vv.name}</Link>)
  }

  render () {
    return (
      <div className='full'>
        <header className='header'>React && Canvas Demo</header>
        <main className='main'>
          <aside className='pull-left aside'>
            { this.getSubMenu() }
          </aside>
          <div className='container' id='container'>
            <Outlet />
          </div>
        </main>
      </div>
    )
  } 
}