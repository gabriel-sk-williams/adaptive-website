import React, { Component } from 'react';
 
class ArrowShape extends Component {

	handleClick = (e) => { 
        this.props.onClick(); 
    }
	
	render() {
		return (
			<svg 	
				onClick={this.handleClick} 
				className={this.props.className}  
				width="35" height="40" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" 
			>
				<path d="M 2,7 l 10,0" />
				<path d="M 8,3 l 4.25,4.25" />
                <path d="M 12,7 l -4,4" />
			</svg>
		);
	}
}

export default ArrowShape;