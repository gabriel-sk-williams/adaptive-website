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
		const about = this.props.activePage === "about";

		const techClass = tech ? "menu right white bold" : "menu right";
		const aboutClass = about ? "menu right white bold" : "menu right";

		const hamburgerClass = "hamburger";
		const mobileClass = this.state.menuStatus ? "nav-mobile open" : "nav-mobile closed";
    return 	(
			<nav className="nav-top main-rails">
				<NavMobile status={mobileClass} menuToggle={this.menuToggle}/>

				<ul className="flex">
					<li className='col-6-12'>						
						<div className="left">
							<Link to='/'>
								<h1 className="bold">adaptive</h1>
							</Link>
						</div>
					</li>
					<li className='col-6-12'>
						<ul className="flex-right bottom-right">
							<li className='link-header'>
								<Link to='/tech/'>
									<h3 id="nav" className={techClass}>tech</h3>
								</Link>
							</li>
							<li className='link-header'>
								<Link to='/about/'>
									<h3 id="nav" className={aboutClass}>about</h3>
								</Link>
							</li>
						</ul>
					</li>
				</ul>

				<Menu className={hamburgerClass} onClick={this.handleClick} />
			</nav>
		);
  	}
}





export default NavTop;