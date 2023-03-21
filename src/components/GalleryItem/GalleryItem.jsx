
import { Component } from "react";

export class GalleryItem extends Component{
    state = {
        
    }
    render() {
        return (
        <ul>
          {this.props.articles.map(galleryItem => (
            <li key={galleryItem.id}  >
              {' '}
                  <img src={galleryItem.previewURL} alt={galleryItem.tags} onClick={ (e)=>this.props.fullViewHandle(e, galleryItem.id)}/>
            </li>
          ))}
          
        </ul>
      );
    }
}