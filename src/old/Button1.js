import React, { Component } from 'react';
import ArrowShape from './svg/ArrowShape';
// import PropTypes from 'prop-types';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            hover: false
        }
    }

    onMouseOver = () => { this.setState({ hover: true }); }
    onMouseDown = () => { this.setState({ clicked: true }); }
    onMouseOut = () => { this.setState({ clicked: false, hover: false }); }

    render() {
        const { clicked, hover } = this.state;
        const clickClass = clicked ? "clicked-button" : "button";

        return (
            <button
                className={clickClass}
                onMouseOver={this.onMouseOver}
                onMouseDown={this.onMouseDown} 
                onMouseOut={this.onMouseOut}
            >
                <ul className="flex">
                    <li className="col-6-12">
                        <div className="mini-card">
                        <h3 className="left mobile">{this.props.children}</h3>
                        </div>
                    </li>
                    <li className="col-6-12">
                        <div className="mini-symbol right">
                        <ArrowShape 
                            className="exit-shape" 
                            onClick={this.menuToggle}
                        />
                        </div>
                    </li>
                </ul>
            </button>
            
        );
    }
}

export default Button;
/*
<span className="mini-module">
    <ul className="flex">
    <li className="col-6-12">
        <div className="mini-card">
        <h3 className="left mobile">contact</h3>
        </div>
    </li>
    <li className="col-6-12">
        <div className="mini-symbol right">
        <ArrowShape 
            className="exit-shape" 
            onClick={this.menuToggle}
        />
        </div>
    </li>
    </ul>
</span>
*/

/*
const common = {
            backgroundColor: btnColor,
            color: labelColor || 'white'
        };
const outlineStyles = {
    border: `1px solid ${btnColor}`,
    color: btnColor,
    backgroundColor: 'white'
};
const disabledStyle = {
    cursor: 'default',
    backgroundColor: btnColor,
    color: labelColor || 'white',
    opacity: 0.4
};

static propTypes = {
    border: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    radius: PropTypes.string,
    onClick: PropTypes.func
};

static defaultProps = {
    border: false,
    color: false,
    height: '',
    width: '',
    radius: '',
    onClick: () => '',
};
*/

