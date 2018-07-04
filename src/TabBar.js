import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
import faAddressBook from '@fortawesome/fontawesome-free-solid/faAddressBook'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'

import {Tab, TabBar, TabBarItem, TabBody} from 'react-weui';

import MessageList from './MessageList';
import FriendList from "./FriendList";
import Mine from "./Mine";
import MessageDetail from "./MessageDetail";
import NavBar from "./NavBar";

export default class TabBarDemo extends React.Component {

  messageList = 'messageList';
  messageDetail = 'messageDetail';
  friendList = 'friendList';
  mine = 'mine';

  constructor(props) {
    super(props);
    this.state = {
      body: this.messageList,
      messageId: 0,
      showBack: false,
      title: 'UChat'
    };

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick(body) {
    console.log('handle click tab ' + body);
    this.setState({
      body: body,
    });
  }

  handleBack() {
    this.setState({
      body: this.messageList,
      showBack:false,
      title: 'UChat'
    });
  }

  showDetail(id) {
    this.setState({
      body: this.messageDetail,
      messageId: id,
      showBack: true,
      title: 'Jack'
    });
  }

  render() {
    let body;
    if (this.state.body === this.messageList) {
      body = (<MessageList showDetail={this.showDetail.bind(this, 1)}/>)
    } else if (this.state.body === this.friendList) {
      body = (<FriendList/>)
    } else if (this.state.body === this.mine) {
      body = (<Mine/>)
    } else if (this.state.body === this.messageDetail) {
      body = (<MessageDetail id={this.state.messageId}/>)
    }

    let tabBar;
    if (this.state.body === this.messageList ||
      this.state.body === this.friendList || this.state.body === this.mine) {
      tabBar = (
        <TabBar>
          <TabBarItem
            active={this.state.body === this.messageList}
            onClick={this.handleClick.bind(this, this.messageList)}
            icon={<FontAwesomeIcon icon={faComment} size="lg"/>}
            label="消息"
          />

          <TabBarItem
            active={this.state.body === this.friendList}
            onClick={this.handleClick.bind(this, this.friendList)}
            icon={<FontAwesomeIcon icon={faAddressBook} size="lg"/>}
            label="好友"
          />

          <TabBarItem
            active={this.state.body === this.mine}
            onClick={this.handleClick.bind(this, this.mine)}
            icon={<FontAwesomeIcon icon={faUser} size="lg"/>}
            label="我"
          />
        </TabBar>
      )
    }

    return (
      <div className="container">
        <NavBar title={this.state.title} showBack={this.state.showBack} handleBack={this.handleBack.bind(this)}/>
        <Tab>
          <TabBody>
            {body}
          </TabBody>
          {tabBar}
        </Tab>
      </div>
    );
  }
};
