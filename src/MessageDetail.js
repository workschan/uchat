import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'

import {
  Button,
  Cell,
  CellBody,
  CellFooter,
  CellHeader,
  Cells,
  Form,
  FormCell,
  Input,
} from 'react-weui';

export default class MessageDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      history: [
    {id: 1, content: 'Hi! man.', mine: true},{id: 2, content: 'Hello! man.', mine: false}
      ],

      message: '',
    };
  }

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

  handleClick() {
    console.log(this.state.message)
    this.state.history.push({id: this.state.history.length+1, content: this.state.message, mine: true});
    this.setState({
      history: this.state.history,
    });
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({
      message: value,
    });
  }

  render() {
    return (
      <div className="cell" style={this.props.style}>
        <Cells className="message">

          {this.state.history.map((item) => (
            item.mine===false ? (
              <Cell key={item.id}>
                <CellHeader>
                  <FontAwesomeIcon icon={faUserCircle} size="2x" style={{marginRight: `15px`}}/>
                </CellHeader>
                <CellBody>
                  {item.content}
                </CellBody>
                <CellFooter/>
              </Cell>
            ) : (
              <Cell key={item.id}>
                <CellHeader>
                </CellHeader>
                <CellBody style={{textAlign: 'right', background: 'green'}}>
                  {item.content}
                </CellBody>
                <CellFooter>
                  <FontAwesomeIcon icon={faUserCircle} size="2x" style={{ marginLeft: `15px`, color: '#000'}}/>
                </CellFooter>
              </Cell>
            )
          ))}
        </Cells>

        <Form style={{position: 'absolute', bottom: '0', width: '100%'}}>
          <FormCell style={{padding: '0 15px'}}>
            <CellBody>
              <Input type="text" value={this.state.message} onChange={this.handleChange} />
            </CellBody>
            <CellFooter>
              <Button type="vcode" onClick={this.handleClick.bind(this)}>Send</Button>
            </CellFooter>
          </FormCell>
        </Form>
      </div>
    );
  }

};
