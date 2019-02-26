import React from 'react';
import SearchBar from './SearchBar';

const style = { marginTop: '10px' }

const App = () => {
  return (
    <div className="ui container" style={style}>
      <SearchBar />
    </div>
  )
}

export default App