import { Component } from 'react';
// import { getImages } from 'components/Fetch/FetchURL';
import { FetchUrl } from 'components/Fetch/FetchURL';
// const API_KEY = '33350252-53a75f568ce69e642e03bf7bf';
const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejeced',
  RESOLVED: 'resolved',
};
export class ImageGallery extends Component {
  state = {
    articles: [],
    status: STATUS.IDLE,
    // searchQuery: this.props.searchQuery,
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps)
    console.log('this props in update', this.props.searchQuery)
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('inside IF')
    this.setState({ status: STATUS.PENDING });
    FetchUrl(this.props.searchQuery)
      .then(data => {
        console.log('DATA in update', data)
        this.setState({ articles: data.data.hits, status: STATUS.RESOLVED })
      })
      .catch(error => {
        this.setState({ statis: STATUS.REJECTED });
      });
  }
}

  // updateGallery = () => {
  //   this.setState({ status: STATUS.PENDING });
  //   FetchUrl.handleSearchByWord()
  //     .then(data =>
  //       this.setState(prevState => {
  //         return [...prevState.articles, data];
  //       })
  //     )
  //     .catch(error => {
  //       this.setState({ statis: STATUS.REJECTED });
  //     });
  // };
  
  // dataHandler = galleryData => {
  //   console.log('this.props.galleryData;', galleryData);
  //   this.setState({ articles: this.props.galleryData });
  // };

  render() {
    if (this.state.status === STATUS.IDLE) {
      return <h1>IDLE</h1>;
    }
    if (this.state.status === STATUS.PENDING) {
      return <h1>PENDING</h1>;
    }
    if (this.state.status === STATUS.RESOLVED) {
      return (
        <ul>
          {this.state.articles.map(galleryItem => (
            <li key={galleryItem.id}>
              {' '}
              <img src={galleryItem.previewURL} alt={galleryItem.tags} />
            </li>
          ))}
        </ul>
      );
    }
  }
}

// console.log(this.props.galleryData)
