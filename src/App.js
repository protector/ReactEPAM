import React, {Component} from 'react';
import Header from './containers/Header/Header';
import ResultBar from './components/ResultBar/ResultBar';
import Results from './containers/Results/Results';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry';

class App extends Component {
  render() {
    const itemsResult = [
			{
				src: '/src/assets/item-detailed.jpg',
				genre: 'Drama',
				release: 1997,
				title: 'Jackie Brown',
				id:'asd'
			},
			{
				src: '/src/assets/item-detailed.jpg',
				genre: 'Independent Movies',
				release: 1992,
				title: 'Reservoir Dogs',
				id:'sdf'
			},
			{
				src: '/src/assets/item-detailed.jpg',
				genre: 'Comedies',
				release: 1995,
				title: 'Four Rooms',
				id:'dfg'
			},
			{
				src: '/src/assets/item-detailed.jpg',
				genre: 'Drama',
				release: 2012,
				title: 'Django Unchained',
				id:'fgh'
			},
			{
				src: '/src/assets/item-detailed.jpg',
				genre: 'Action & Adventure',
				release: 2004,
				title: 'Kill Bill: Vol. 2',
				id:'ghj'
			}
    ];
    
    return (
      <div>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ResultBar />
        <ErrorBoundary>
          <Results itemsResult={itemsResult} />
        </ErrorBoundary>
        <Footer />
      </div>
    )
  }
}

export default App;