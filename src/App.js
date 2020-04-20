import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  });

  const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=11155760';

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiURL + '&s=' + state.s).then(({ data }) => {
        let results = data.search;

        setState(prevState => {
          return { ...prevState, results}
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
      </main>
    </div>
  );
}

export default App;
