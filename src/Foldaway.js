import React, { Component } from 'react';
import './Astyles.css';

class Foldaway extends Component {
    constructor (props) {
        super(props);
        this.state = {
          headline: props.headline,
          content: props.content,
          expanded: true,
        }
    }

    toggle = () => {
        this.setState( prevState => ({ expanded: !prevState.expanded }))
    }

    render() {
        const { headline, content, expanded } = this.state;
        const status = expanded ? "expand" : "fold";
        const prefix = expanded ? "+ " : "- "
        const hl = prefix + headline;
        return (
            <div>
                <h1 className="foldaway" onClick={this.toggle}>{hl}</h1>
                <div  className={status}>{content}</div>
            </div>
        );
    }
}

export default Foldaway;