import algoliasearch from 'algoliasearch/lite';
import React, { Component, Fragment } from 'react';
import { InstantSearch, ClearRefinements } from 'react-instantsearch-dom';
import Places from './components/widget.js';
import './App.css';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch Places</h1>
        
        <InstantSearch indexName="airports" searchClient={searchClient}>
          <div className="search-panel">
            <div className="search-panel__filters">
              <ClearRefinements />
            </div>

            <div className="search-panel__results">
              <Places
                defaultRefinement={{
                  lat: 37.7793,
                  lng: -122.419,
                }}
              />
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default App;
