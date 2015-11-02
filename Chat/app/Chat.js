// Chat.js
// https://2cb30612.ngrok.com

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Form = require('./components/Form');

var Chat = React.createClass({
  addMessage(message) {
    console.log(message);
  },
  render() {
    return (
      <View style={styles.container}>
        <Text>Component</Text>
        <Form add={this.addMessage} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Chat;
