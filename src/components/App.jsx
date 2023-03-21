import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searcbar/Searchbar';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    articles: [], 
    searchQuery: '',
    modalURL: '',
    modalIsVisible: false,
  };

  handlerStateChange = articles => {
    console.log('Articles in app', articles);
    this.setState({ articles });
  };
  searchInputHandler = inputValue => {
    console.log('searchInputHandler', inputValue);
    this.setState({ searchQuery: inputValue });
  };

  modalWindowHandler = image => {
    console.log('PageURL', image);
    this.setState(prevState => {
      return { modalIsVisible: !prevState.modalIsVisible };
    });
    this.setState({
      modalURL: image.largeImageURL,
    });
  };

  render() {
    
    return (
      <>
        {this.state.modalIsVisible&&<Modal
            modalURL={this.state.modalURL}
            modalWindowHandler={this.modalWindowHandler}
          >
            <img src={this.state.modalURL} alt="" />
          </Modal>}
        <Searchbar searchInputHandler={this.searchInputHandler} />
        <ImageGallery
          articles={this.state.articles}
          searchQuery={this.state.searchQuery}
          modalWindowHandler={this.modalWindowHandler}
          handlerStateChange={this.handlerStateChange}
        />

        {/* <Loader></Loader> */}
      </>
    );
  }
}
