import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnColor: props.btnColor,
            labelColor: props.labelColor,
            clicked: false,
            hover: false
        }
    }

    getHex = (name, hover) => {
        return (
            hover ? "#fe90ad" 
            : name === "black" ? "#172C36"
            : name === "cream" ? "#efeeee"
            : name === "orchid" ? "#d7c0d0"
            : name === "baker" ? "#fe90ad"
            : name === "mystic" ? "#d65780"
            : name === "orange" ? "#fbaf00"
            : name === "cyber" ? "#ffd639"
            : name === "park" ? "#8fc93a"
            : name === "tree" ? "#628b48"
            : name === "bluejay" ? "#5aa9e6"
            : name === "azul" ? "#2a628f"
            : name === "plum" ? "#9c89b8"
            : name === "coffee" ? "#3e363f"
            : "#000000"
        );
    }

    onMouseOver = () => { this.setState({ hover: true }); }
    onMouseDown = () => { this.setState({ clicked: true }); }
    onMouseOut = () => { this.setState({ clicked: false, hover: false }); }

    render() {
        const { btnColor, labelColor, clicked, hover } = this.state;
        const clickClass = clicked ? "clicked-button" : "button";
        const common = {
            backgroundColor: this.getHex(btnColor, hover),
            color: this.getHex(labelColor) || 'white',
            fontSize: "1rem",
            lineHeight: "1.4rem",
            height: "4rem",
            width: "14rem",
            letterSpacing: "0.05rem"
        };

        return (
            <button 
                style={common} 
                className={clickClass} 
                onMouseOver={this.onMouseOver}
                onMouseDown={this.onMouseDown} 
                onMouseOut={this.onMouseOut}
            >
                <span>{this.props.children}</span>
            </button>
        );
    }
}

export default Button;

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

