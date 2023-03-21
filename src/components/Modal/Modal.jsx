import { Component } from 'react';
import { ModalWindow } from './Modal.Styled';

export class Modal extends Component {
  state = {};
  componentDidMount() {
    console.log('MOdal is mount');
    window.addEventListener('click', this.onModalClick);
    window.addEventListener('keydown', this.onModalClick);
  }
  componentWillUnmount() {
    console.log('MOdal UNmount');

    window.removeEventListener('click', this.onModalClick);
    window.removeEventListener('keydown', this.onModalClick);
  }
    onModalClick = e => {
      
    console.log('modal e', e);
    if (e.code === 'Escape' || e.type === 'click')
      this.props.modalWindowHandler({ pageURL: null });
  };
  render() {
    return (
      <ModalWindow className="overlay" onClick={this.onModalClick}>
        <div className="modal">
          {this.props.children}
        </div>
      </ModalWindow>
    );
  }
}
