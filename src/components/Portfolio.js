// Import libraries for making a Component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import PortfolioDetail from './PortfolioDetail';

class Portfolio extends Component {
  state = { albums: [] };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums(){
    return this.state.albums.map( album =>
      <PortfolioDetail key={album.title} data={album}/>
    );
  }

  render (){
    console.log(this.state);
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default Portfolio;
