import React, { Component } from 'react';
 
class Footer extends Component {

	handleClick = () => { this.props.menuToggle(); }

    render() {
        return 	(
            <footer id="footer">
                <section className="footer-module">
                    <div className="mini-card">
                        <h3 className="left">contact:</h3>
                        <br />
                        <a href="mailto:office@adaptivecity.io">
                            <h3 className="left bold"> office@adaptivecity.io </h3>
                        </a>
                        <h3 className="left">new york city</h3>
                    </div>
                </section>
            </footer>
		);
    }
}

export default Footer;