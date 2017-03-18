import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

export default class App extends Component {
  constructor(){
    super();
    this.state={title : "This will change"};
  }

  changeTitle(title){
    this.setState({title});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Header changeTitle={this.changeTitle.bind(this)} title = {this.state.title} />
      </div>
    );
  }
}
