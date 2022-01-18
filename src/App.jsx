import './App.css';
import { Fragment, Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import fetchImages from './services';

class App extends Component {
  state = {
    images: [],
    page: 1,
    value: '',
    skeleton: true,
    modal: false,
    image: '',
  };

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.esc);
  // }

  handleSubmit = (value, page = 1) => {
    if (page === 1) this.setState({ page: page });

    this.setState({ value: value, skeleton: false });

    fetchImages(value, page).then(obj =>
      this.setState(prevState => {
        if (page === 1) {
          window.scrollTo(0, 0);

          return { images: obj.hits, skeleton: true };
        }
        return { images: [...prevState.images, ...obj.hits], skeleton: true };
      }),
    );
  };

  onLoadMoreClick = async () => {
    await this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    const { page, value } = this.state;
    this.handleSubmit(value, page);
  };

  toggleModal = e => {
    // window.addEventListener('keydown', this.esc);
    if (e.currentTarget === e.target) {
      this.setState(prevState => {
        return {
          modal: !prevState.modal,
        };
      });
    }
    if (e.currentTarget.id) {
      this.onImageClick(e.currentTarget.id);
    }
  };

  onImageClick = id => {
    const addImageToState = this.state.images.find(img =>
      parseInt(id) === img.id ? img.largeImageURL : 0,
    );
    this.setState({ image: addImageToState.largeImageURL });
  };

  esc = e => {
    if (e.keyCode === 27) {
      this.setState(prevState => {
        return {
          modal: !prevState.modal,
        };
      });
    }
  };

  render() {
    const { images, skeleton, modal, image } = this.state;
    return (
      <Fragment>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {!skeleton && <Loader></Loader>}
        {skeleton && (
          <ImageGallery images={images} click={this.toggleModal}></ImageGallery>
        )}
        {skeleton && images.length > 0 && (
          <Button onClick={this.onLoadMoreClick}></Button>
        )}
        {modal && <Modal image={image} click={this.toggleModal} esc={this.esc}></Modal>}
      </Fragment>
    );
  }
}
export default App;
