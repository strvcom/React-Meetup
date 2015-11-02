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
  render() {
    return(
      <Form />
    );
  }
});

module.exports = Chat;
