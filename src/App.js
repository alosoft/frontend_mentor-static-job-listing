import './App.css';
import Selection from './components/Selection';
import Card from './components/Card';
import data from './data.js';
import { useState } from 'react';

function App() {
  const [selection, setSelection] = useState([]);

  function updateQuery(query) {
    if (!selection.includes(query)) {
      setSelection(prevSelection => [...prevSelection, query])
    } else {
      setSelection(prevSelection => prevSelection.filter(item => item !== query))
    }
  }

  return <>
    <header></header>
    <main className={`${selection.length > 14 ? 'pad_6x' : selection.length > 10 ? 'pad_5x' : selection.length > 8 ? 'pad_4x' : selection.length > 6 ? 'pad_3x' : selection.length > 4 ? 'pad_2x' : ''} job__listing`}>
      {selection.length > 0 ? <div className="job__listing__selections">
        <div className="job__listing__selections__list">
          {selection.map((item, index) => <Selection key={index} query={item} updateQuery={updateQuery} />)}
        </div>
        <button onClick={() => setSelection([])} className="clear">Clear</button>
      </div> : null}
      {selection.length === 0 ?
        data.map((item, index) => <Card key={index} data={item} selections={selection} updateQuery={updateQuery} />) :
        selection.map(query => (data.filter(item => {
          return item.role === query || item.level === query || item.languages.includes(query) || item.tools.includes(query)
        }).map((item, index) => <Card key={index} data={item} selections={selection} updateQuery={updateQuery} />)))
      }
    </main>
  </>;
}

export default App;
