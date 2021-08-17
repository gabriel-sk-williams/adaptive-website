import React, { Component } from 'react';
 
class Menu extends Component {

	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	}

	prepCoords(level) {
		return	{
			x1: 0,
			x2: 35,
			y1: level,
			y2: level
		}
	}

	handleClick = (e) => {
		this.setState({ isOpen: !this.state.isOpen });
		this.props.onClick();
	}
	
	render() {
		var coords0 = this.prepCoords(11);
		var coords1 = this.prepCoords(20);
		var coords2 = this.prepCoords(29);

		return (
			<svg 	
				ref="hamburger" 
				onClick={this.handleClick} 
				className={this.props.className} 
				style={{cursor: 'pointer'}} 
				width="35" height="40" xmlns="http://www.w3.org/2000/svg" 
			>
				<line {...coords0} strokeWidth={2.4} />
				<line {...coords1} strokeWidth={2.4} />
				<line {...coords2} strokeWidth={2.4} />
			</svg>
		);
	}
}

export default Menu;