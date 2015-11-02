// Messages.js

'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var Messages = React.createClass({
  getInitialState(){
    return {
      text: ''
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <Text>Messages</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
});

module.exports = Messages;


