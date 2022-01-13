import './App.css';
import { Fragment, Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    page: 1,
    value: '',
    skeleton: true,
    modal: false,
    image: '',
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.esc);
  }

  handleSubmit = async (value, page = 1) => {
    if (page === 1) this.setState({ page: page });

    const query = `https://pixabay.com/api/?q=${value}&page=${page}&key=24204810-4c4e56177cf5555097dc8a654&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ value: value, skeleton: false });

    // setTimeout(() => {
    fetch(query)
      .then(res => res.json())
      .then(obj =>
        this.setState(prevState => {
          if (page === 1) {
            window.scrollTo(0, 0);

            return { images: obj.hits, skeleton: true };
          }
          return { images: [...prevState.images, ...obj.hits], skeleton: true };
        }),
      );
    // }, 2000)
  };

  onLoadMoreClick = async () => {
    await this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    const { page, value } = this.state;
    this.handleSubmit(value, page);
  };

  toggleModal = e => {
    window.addEventListener('keydown', this.esc);
    if (e.currentTarget === e.target) {
      this.setState(prevState => {
        return {
          modal: !prevState.modal,
        };
      });
    }
    if (e.currentTarget.attributes.image) this.onImageClick(e);
  };

  onImageClick = image => {
    const addImageToState = image.currentTarget.attributes.image.value;
    this.setState({ image: addImageToState });
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
        {modal && <Modal image={image} click={this.toggleModal}></Modal>}
      </Fragment>
    );
  }
}
export default App;
