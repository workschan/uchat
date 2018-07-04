import React from 'react';
import ReactDOM from 'react-dom';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './fix.css';
import TabBar from "./TabBar";

const App = () => {return (<TabBar/>)};

ReactDOM.render((
  <App/>
), document.getElementById('root'));
