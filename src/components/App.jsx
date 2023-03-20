import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searcbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  //  getImages(inputValue) {
  //    fetch(
  //     `https://pixabay.com/api/?key=33350252-53a75f568ce69e642e03bf7bf&?=${inputValue}`
  //   )
  //     .then(r => r.json())
  //     .then(galleryData => this.setState({ picCards: galleryData, isLoading: false }))

  // };
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.searchQuery !== prevState.searchQuery) {
  //     console.log('this.state.searchQuery', this.state.searchQuery);
  //     console.log('prevState.searchQuery', prevState.searchQuery);
  //   }
  // }
  searchInputHandler = inputValue => {
    console.log('searchInputHandler', inputValue);
    this.setState({ searchQuery: inputValue });
  };

  render() {
    return (
      <>
        <Searchbar searchInputHandler={this.searchInputHandler} />
        <ImageGallery searchQuery={this.state.searchQuery} />

        {/* <Loader></Loader> */}
        {/* <Button></Button> */}
        {/* <Modal></Modal> */}
      </>
    );
  }
}
