import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'

import {
  Page,
  CellsTitle,
  Cells,
  Cell,
  CellBody,
  CellHeader,
  CellFooter,
} from 'react-weui';

export default class Mine extends React.Component {

  render() {
    console.log('render Mine');
    return (
      <div className="cell" style={this.props.style}>
        <Cells>
          <Cell>
            <CellHeader>

            </CellHeader>
            <CellBody style={{textAlign: 'center'}}>
              <FontAwesomeIcon icon={faUserCircle} size="3x"/>
              <p>小明</p>
            </CellBody>
            <CellFooter/>
          </Cell>

        </Cells>

      </div>
    );
  }

};
