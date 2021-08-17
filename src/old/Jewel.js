import React, { Component } from 'react';

class Jewel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color || "black"
        }
    }

    render() {
        const color = "jewel " + this.state.color;
        return (
            <div className={color} />
        );
    }
}

export default Jewel;
