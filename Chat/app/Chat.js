//Chat.js

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Form = require('./components/Form');

var Chat = React.createClass({
  addMessage(message){
    console.log(message);
  },
  render() {
    return(
      <Form add={this.addMessage} />
    );
  }
});

module.exports = Chat;
