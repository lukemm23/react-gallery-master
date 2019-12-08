import React, { Component } from 'react';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryList extends Component {

    render() {
        const galArray = this.props.gallery.map((item, index) => {
            return (

                <GalleryListItem 
                key={index} 
                gallery={item} 
                addLike={this.props.addLike} 
                delete={this.props.delete} />
            )
        })

        return (
            <div className="row">
                {galArray}
            </div>
        )
    }
}


export default GalleryList;