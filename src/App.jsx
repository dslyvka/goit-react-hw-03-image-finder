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
    isLoading: false,
    isModalOpen: false,
    largeImageURL: '',
  };

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.esc);
  // }

  async componentDidUpdate(_, prevState) {
    const { value, page } = this.state;
    if (prevState.value !== value || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { hits } = await fetchImages(value, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          isLoading: false,
        }));
      } catch (error) {
        console.log(error);
      }
      if (page > 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  }
  handleSubmit = value => {
    this.setState({ value });
  };

  onLoadMoreClick = async () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  onImageClick = largeImageURL => {
    this.setState({ largeImageURL });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, isModalOpen, largeImageURL } = this.state;
    return (
      <Fragment>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onImageClick={this.onImageClick}
          ></ImageGallery>
        )}
        {isLoading && <Loader></Loader>}
        {!isLoading && images.length > 0 && (
          <Button onLoadMoreClick={this.onLoadMoreClick}></Button>
        )}
        {isModalOpen && (
          <Modal image={largeImageURL} onClose={this.toggleModal}></Modal>
        )}
      </Fragment>
    );
  }
}
export default App;
