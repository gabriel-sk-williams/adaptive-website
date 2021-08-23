import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ArrowShape from './svg/ArrowShape';
import { withRouter } from 'react-router'

class LinkButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
        clicked: false,
        hover: false
    }
  }

  render() {
    const { 
      history, 
      location, 
      match, 
      staticContext, 
      to, 
      onClick, 
      ...rest
    } = this.props;

    return (
      <button
        {...rest} 
        onClick={(event) => { onClick && onClick(event) 
        history.push(to)
      }}>
        <span className="mini-module">
          <ul className="flex">
            <li className="col-6-12">
              <div className="mini-card">
                <h3 className="left mobile">{this.props.children}</h3>
              </div>
            </li>
            <li className="col-6-12">
              <div className="mini-symbol right">
                <ArrowShape className="exit-shape" />
              </div>
            </li>
          </ul>
        </span>
      </button>
    );
  }
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton);

