import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft'

import {NavBar, NavBarItem,} from 'react-weui';

export default class NavBarDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.handleBack();
  }

  render() {
    let icon;
    let marginLeft = '20px';
    if (this.props.showBack) {
      icon = (<FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={this.handleBack}
                               className="arrow-left" style={this.props.style} />)
      marginLeft = '80px';
    }

    return (
      <NavBar>
        <NavBarItem>
          {icon}
          <p style={{marginLeft: marginLeft, textAlign: 'left'}}>{this.props.title}</p>
        </NavBarItem>
      </NavBar>
    );
  }

};
