import React, {Component} from 'react';
import Header from './containers/Header/Header';
import ResultBar from './components/ResultBar/ResultBar';
//import Results from './containers/Results/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ResultBar />
      </div>
    )
  }
}

export default App;