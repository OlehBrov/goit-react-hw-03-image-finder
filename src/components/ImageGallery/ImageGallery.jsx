import { Component } from 'react';
import { FetchUrl } from 'components/Fetch/FetchURL';
import { GalleryItem } from '../GalleryItem/GalleryItem';
import { IdleView } from 'components/Views/IdleView';
import { PendingView } from 'components/Views/PendingView';
// import { MdImageSearch } from 'react-icons/md';
// import { IconContext } from 'react-icons';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export class ImageGallery extends Component {
  state = {
    articles: this.props.articles,
    status: STATUS.IDLE,
    articlesPage: 1,
    error: '',
  };
  componentDidUpdate(prevProps, prevState) {
    // console.log('PrevState', prevState)
    // if (prevState.articles.length !== this.state.articles.length) {
    //   this.props.handlerStateChange(this.state.articles)
    // }
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('componentDidUpdate fire');
      this.setState({ status: STATUS.PENDING });
      FetchUrl(this.props.searchQuery, this.state.articlesPage)
        .then(data => {
          console.log('DATA in update', data);
          if (data.data.total === 0) {
            return Promise.reject('No pictures available on your request ((');
          } else
            this.setState({
              articles: data.data.hits,
              status: STATUS.RESOLVED,
              articlesPage: 2,
            });
        })
        .catch(error => {
          this.setState({ status: STATUS.REJECTED, error });
          console.log('console in catch', error);
        });
    }
  }
  handleLoadMoreButton = e => {
    this.setState(prevState => {
      return { articlesPage: prevState.articlesPage + 1 };
    });
    FetchUrl(this.props.searchQuery, this.state.articlesPage)
      .then(data => {
        if (data.data.total === 0) {
          return Promise.reject('No data available!');
        }
        this.setState(prevState => {
          return {
            articles: [...prevState.articles, ...data.data.hits],
            status: STATUS.RESOLVED,
          };
        });
      })
      .catch(error => {
        this.setState({ status: STATUS.REJECTED, error });
        console.log(error);
      });
  };

  fullViewHandle = (e, picId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('state befort find', this.state);
    console.log('EVENT', e);
    const largeImg = this.state.articles.find(el => {
      return el.id === picId;
    });
    console.log('largeImg', largeImg);
    this.props.modalWindowHandler(largeImg);
    console.log('state after find', this.state);
    
  };
  render() {
    if (this.state.status === STATUS.IDLE) {
      return (
        <IdleView/>
      );
    } else if (this.state.status === STATUS.PENDING) {
      return <PendingView/>;
    } else if (this.state.status === STATUS.RESOLVED) {
      return (
        <>
          <GalleryItem
            articles={this.state.articles}
            fullViewHandle={this.fullViewHandle}
          />
          <button type="button" onClick={this.handleLoadMoreButton}>
            Load More...
          </button>
        </>
      );
    } else if (this.state.status === STATUS.REJECTED) {
      return <h1>Something went wrong. {this.state.error}</h1>;
    }
  }
}

