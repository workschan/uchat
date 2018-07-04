import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'

import {Cell, CellBody, CellFooter, CellHeader, Cells,} from 'react-weui';

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(body) {
   this.props.showDetail();
  }

  render() {
    return (
      <div className="cell" style={this.props.style}>
        <Cells>
          <Cell access onClick={this.handleClick.bind(this, 1)}>
            <CellHeader>
              {/*<img src={iconSrc} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>*/}
              <FontAwesomeIcon icon={faUserCircle} size="2x" style={{marginRight: `15px`}}/>
            </CellHeader>
            <CellBody>
              <p>Jack</p>
              <p className="last-msg">Hi! man.</p>
            </CellBody>
            <CellFooter/>
          </Cell>
          <Cell access onClick={this.handleClick.bind(this, 2)}>
            <CellHeader>
              <FontAwesomeIcon icon={faUserCircle} size="2x" style={{ marginRight: `15px`}}/>
            </CellHeader>
            <CellBody>
              <p>Tom</p>
              <p className="last-msg">Hello! man.</p>
            </CellBody>
            <CellFooter/>
          </Cell>
        </Cells>
      </div>
    );
  }

};
