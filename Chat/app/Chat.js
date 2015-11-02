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
  render() {
    return (
      <View style={styles.container}>
        <Text>Component</Text>
        <Form />
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
