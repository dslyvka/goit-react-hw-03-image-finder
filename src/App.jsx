import './App.css';
import { Fragment, Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    images: [],
  };

  handleSubmit = value => {
    const query = `https://pixabay.com/api/?q=${value}&page=1&key=24204810-4c4e56177cf5555097dc8a654&image_type=photo&orientation=horizontal&per_page=12`;
    // console.log(value);
    fetch(query)
      .then(res => res.json())
      .then(obj => this.setState({ images: obj.hits }));
  };

  render() {
    const { images } = this.state;
    return (
      <Fragment>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>

        <ImageGallery images={images}></ImageGallery>
      </Fragment>
    );
  }
}
export default App;
