import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'

import {Cell, CellBody, CellFooter, CellHeader, Cells, } from 'react-weui';

export default class FriendList extends React.Component {

  render() {
    console.log('render FriendList');

    return (
      <div className="cell" style={this.props.style}>
        <Cells>
          <Cell access>
            <CellHeader>
              <FontAwesomeIcon icon={faUserCircle} size="2x" style={{marginRight: `15px`}}/>
            </CellHeader>
            <CellBody>
              Jack
            </CellBody>
            <CellFooter/>
          </Cell>
          <Cell access>
            <CellHeader>
              <FontAwesomeIcon icon={faUserCircle} size="2x" style={{ marginRight: `15px`}}/>
            </CellHeader>
            <CellBody>
              Alexander
            </CellBody>
            <CellFooter/>
          </Cell>
        </Cells>

      </div>
    );
  }

};
