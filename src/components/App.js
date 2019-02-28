import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const style = { marginTop: '10px' }

class App extends React.Component {

  state = {
    images: []
  };

  onSearchSubmit = async searchTerm => {
    const response = await unsplash.get('/search/photos', {
      params: { query: searchTerm },
    })

    this.setState({ images: response.data.results });

    // // Using .then at the end of the promise
    // .then(response => {
    //   console.log(response.data.results);
    // });
  }

  render() {
    return (
      <div className="ui container" style={style} >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App