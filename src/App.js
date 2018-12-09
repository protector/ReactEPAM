import React, {Component} from 'react';
import Users from './containers/Users';
import Pizza from './containers/Pizza'

class App extends Component {
  render() {
    return (
      <div>
        <Pizza />
        <Users />
      </div>
    )
  }
}

export default App;