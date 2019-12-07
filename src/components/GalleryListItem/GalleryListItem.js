import React, { Component } from 'react';
import './GalleryListItem.css';

class GalleryListItem extends Component {
    state = {
        descShow: false,
        imgHide: true,
    }

    clickShowDesc = (event) => {
        this.setState({
            descShow: !this.state.descShow,
        })
    }

    clickHideImg = (event) => {
        console.log('btn clicked');
        this.setState({
            descShow: !this.state.descShow,
        })
    }


    render() {
        let showClass;
        let hideImg;
        if (this.state.descShow) {
            showClass = 'isExpanded';
            hideImg = 'isHidden';
        } else if (!this.state.descShow) {
            showClass = 'isHidden';
            hideImg = 'isExpanded';
        }

        return (


            <div className="col-md-4">
                <img className={hideImg} onClick={this.clickShowDesc} alt='' src={this.props.gallery.path} />
                <div className={showClass} >
                    <p onClick={this.clickHideImg}>{this.props.gallery.id}. {this.props.gallery.description}</p>
                </div>
                <p onClick={this.clickHideImg}>
                    {this.props.gallery.likes} people love this!
                    </p>

                <button className="btn btn-sm btn-dark" onClick={() => this.props.addLike(this.props.gallery.id)} >
                    Love It!
                    </button>
            </div>


        )
    }
}


export default GalleryListItem;