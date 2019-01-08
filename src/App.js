import React, {Component} from 'react';
import Header from './containers/Header/Header';
import ResultBar from './components/ResultBar/ResultBar';
import Results from './containers/Results/Results';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ResultBar />
        <Results />
        <Footer />
      </div>
    )
  }
}

export default App;