import ReactDOM from 'react-dom'
import * as React from 'react'
import RouterView from './router/index'
import './styles/public.scss'
// import { Example } from './hooks'

// class Clock extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       date: new Date()
//     }
//   }
//   // 组件挂载时
//   componentDidMount () {
//     this.timerId = setInterval(() => this.tick(), 1000)
//   }
//   // 组件卸载时
//   componentWillUnmount () {
//     clearInterval(this.timerId)
//   }

//   tick () {
//     this.setState({
//       date: new Date()
//     })
//   }

//   render () {
//     return <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//   }
// }

// class NameForm extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = { value: '' }

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange (event) {
//     this.setState({ value: event.target.value })
//     this.props.onInputChange(event.target.value)
//   }

//   handleSubmit (event) {
//     alert(`提交的名字：${this.state.value}`)
//     event.preventDefault()
//   }

//   render () {
//     return <form onSubmit = {this.handleSubmit}>
//       <label>名字：
//         <input type='text' value={this.state.value} onChange={this.handleChange} />
//       </label>
//       <input type='submit' value='提交' />
//       {this.props.children}
//     </form>
//   }
// }

// class Welcome extends React.Component{
//   constructor (props) {
//     super(props)
//     this.onInputChange = this.onInputChange.bind(this)
//   }

//   onInputChange (value) {
//     console.log(value)
//   }

//   render () {
//     return <div>
//        <h1>Hello, {this.props.name}!</h1>
//        <Clock />
//        <NameForm onInputChange={this.onInputChange}>
//           <button>取消</button>
//        </NameForm>
//        <Example></Example>
//        <App />
//     </div>
   
//   }
// }

ReactDOM.render(
  // <Example />,
  <RouterView></RouterView>,
  document.getElementById('app')
)