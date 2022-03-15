import React, {Component} from 'react';
import logo from './logo.svg';
import './scss/App.scss';
import Message from './Message';
import AnotherMessage from './AnotherMessage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message />
          <AnotherMessage />
        </header>
      </div>
    );
  }
}

export default App;
