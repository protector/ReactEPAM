import React, {Component} from 'react';
import Search from './containers/Search/Search';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Netflixroulette</h1>
        <Search title="Find your movie" button={'Search'} placeholder={'Search for a movie'} />
      </div>
    )
  }
}

export default App;