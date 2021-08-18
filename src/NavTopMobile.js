import React, { Component } from 'react';
import ExitShape from './svg/ExitShape';
import { Link } from "react-router-dom";
 
class NavTopMobile extends Component {

	handleClick = () => { this.props.menuToggle(); }

	render() {
        return 	(
            <nav className="nav-top mobile">
                <ul className="flex marginal-bottom">
					<li className='col-4-12'>						
						<div className="left">
                            <Link to='/' onClick={this.handleClick}>
                                <h1 className="bold mobile">adaptive</h1>
                            </Link>
						</div>
					</li>
					<li className='col-8-12'>
                        <div className="right">
                            <ExitShape className="exit-shape" onClick={this.handleClick}/>
                        </div>
					</li>
				</ul>
            </nav>
        );
    }
}

export default NavTopMobile;