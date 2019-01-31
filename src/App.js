import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  _increment = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  _decrement = () => {
    this.setState(state => ({ count: state.count - 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World!!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this._increment}>+</button>
        <button onClick={this._decrement}>-</button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
