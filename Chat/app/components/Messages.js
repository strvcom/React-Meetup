//messages.js

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var Messages = React.createClass({
  getInitialState() {
    return {
      text: ''
    }
  },
  render() {
    console.log(this.props.data);
    return(
      <View style={styles.container}>
      </View>
    );
  }
});

var styles = StyleSheet.create({
});

module.exports = Messages;
