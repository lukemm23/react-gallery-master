import React, { Component } from 'react';

class GalleryListItem extends Component {

    render() {
        return (
            <div>
                <img alt='' src={this.props.gallery.path} />
                <p>{this.props.gallery.id}. {this.props.gallery.description}</p>
                <p>
                    Likes: {this.props.gallery.likes} 
                    <button onClick={() => this.props.addLike(this.props.gallery.id)} >
                        Like
                    </button>
                </p>
            </div>
        )
    }
}


export default GalleryListItem;