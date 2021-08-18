import React, { Component } from 'react';
import Menu from './svg/MenuShape';
import NavMobile from './NavMobile';
import { Link } from "react-router-dom";
 
class NavTop extends Component {

	constructor () {
		super();
		this.state = {
			menuStatus: false,
		}
	}

	handleClick = () => {
		this.menuToggle();
	}

	menuToggle = () => {
    	this.setState({ menuStatus: !this.state.menuStatus});
	}

	render() {
		const tech = this.props.activePage === "tech";
		const about = this.props.activePage === "contact";

		const techClass = tech ? "menu right white bold" : "menu right";
		const aboutClass = about ? "menu right white bold" : "menu right";

		const hamburgerClass = "hamburger";
		const mobileClass = this.state.menuStatus ? "nav-mobile open" : "nav-mobile closed";
    return 	(
			<nav className="nav-top">
				<NavMobile status={mobileClass} menuToggle={this.menuToggle}/>

					<Link to='/'>
						<h1 className="bold">adaptive</h1>
					</Link>

					<ul className="flex-right bottom-right">
						<li className='link-header'>
							<Link to='/tech/'>
								<h3 id="nav" className={techClass}>tech</h3>
							</Link>
						</li>
						<li className='link-header'>
							<Link to='/contact/'>
								<h3 id="nav" className={aboutClass}>contact</h3>
							</Link>
						</li>
					</ul>

				<Menu className={hamburgerClass} onClick={this.handleClick} />
			</nav>
		);
  	}
}

export default NavTop;