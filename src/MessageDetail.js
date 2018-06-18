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
  Form,
  FormCell,
  Label,
  Input,
  Button,

} from 'react-weui';

export default class MessageDetail extends React.Component {

  getDetail() {
    fetch('data/word.txt').then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          console.log(data);
        })
      }
    }).catch((res)=>{
      console.log(res.status);
    });
  }

  render() {
    return (
      <div className="cell" style={this.props.style}>
        <Cells className="message">
          <Cell>
            <CellHeader>
              <FontAwesomeIcon icon={faUserCircle} size="2x" style={{marginRight: `15px`}}/>
            </CellHeader>
            <CellBody>
              Hi! man.
            </CellBody>
            <CellFooter/>
          </Cell>
          <Cell>
            <CellHeader>
            </CellHeader>
            <CellBody style={{textAlign: 'right'}}>
              Hello! man.
            </CellBody>
            <CellFooter>
              <FontAwesomeIcon icon={faUserCircle} size="2x" style={{ marginLeft: `15px`, color: '#000'}}/>
            </CellFooter>
          </Cell>
        </Cells>

        <Form style={{position: 'inherit', bottom: '0'}}>
          <FormCell vcode style={{position: 'absolute', bottom: '0'}}>
            <CellHeader>
            </CellHeader>
            <CellBody>
              <Input type="tel" placeholder="Enter your cellphone #"/>
            </CellBody>
            <CellFooter>
              <Button type="vcode">Send</Button>
            </CellFooter>
          </FormCell>
        </Form>
      </div>
    );
  }

};
