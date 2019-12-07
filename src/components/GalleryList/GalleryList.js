import React, { Component } from 'react';
import GalleryListItem from '../GalleryListItem/GalleryListItem';
// import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryList extends Component {

    render() {
        const galArray = this.props.gallery.map((item, index) => {
            return (
                <GalleryListItem key={index} gallery={item} />
            )
        })

        return (
            <div>
                {galArray}
            </div>
        )
    }
}

export default GalleryList;