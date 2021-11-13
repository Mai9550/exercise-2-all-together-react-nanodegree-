import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/



class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

    state = {
      firstValue: '',
      secondValue:'',
      users:[{ username: 'Amy' }, { username: 'John' }],
      messages:[
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' },
      ]
    };

  

  isDisabled = () => {
    return false;
  };

  handleFirstChange=(event)=> {
    this.setState({firstValue: event.target.value});
  }

  handleSecondChange=(event)=> {
    this.setState({secondValue: event.target.value});
  }

  handleSubmit=(event)=> {
    
    event.preventDefault();
  }

  addMessage=(message)=>{
    
    this.setState(
      prevState=>({messages:[...prevState.messages,message]})    )
    
    } 
   

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.state.users[0].username}</div>

            <ul className="message-list">
              {this.state.messages.map((message, index) => (
               
                <li
                  key={index}
                  className={
                    message.username === this.state.users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group"  onSubmit={this.handleSubmit}>

                <input type="text" className="form-control" placeholder="Enter your message..." 
                value={this.state.firstValue} 
                onChange={this.handleFirstChange}  />

                <div className="input-group-append">

                  <button className="btn submit-button" 
                  onClick={()=>this.addMessage({
                    username: 'Amy',
                    text: this.state.firstValue,
                  })}
                  disabled={this.isDisabled()}>
                    SEND
                  </button>

                </div>
              </form>
            </div>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.state.users[1].username}</div>
            <ul className="message-list">
              {this.state.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.state.users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Enter your message..."    
                   value={this.state.secondValue} 
                   onChange={this.handleSecondChange} />
                <div className="input-group-append">
                  <button className="btn submit-button" 
                   onClick={()=>this.addMessage({
                    username: 'John',
                    text: this.state.secondValue,
                  })}
                  disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
