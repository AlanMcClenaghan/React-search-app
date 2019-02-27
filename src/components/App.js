import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

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
    console.log(this.state.images);

    // // Using .then at the end of the promise
    // .then(response => {
    //   console.log(response.data.results);
    // });
  }

  render() {
    return (
      <div className="ui container" style={style} >
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App