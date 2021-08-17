import React, { Component } from 'react';
 
class ExitShape extends Component {

	handleClick = (e) => { this.props.onClick(); }
	
	render() {
		return (
			<svg 	
				onClick={this.handleClick} 
				className={this.props.className}  
				width="35" height="40" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" 
			>
				<path d="M 3,3 l 9,9" />
				<path d="M 3,12 l 9,-9" />
			</svg>
		);
	}
}

export default ExitShape;