import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class Banner extends Component {

    render() {       
        return (
            <div
                id={this.props.id}
                className={this.props.className}
                ref={this.image}
                onLoad={this.handleLoad} 
                alt={this.props} 
                style={{
                    backgroundImage: "url("+this.props.src+")", 
                    zIndex: this.props.zIndex
                }}
            />
        );
    }
}

export default Banner;