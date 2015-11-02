// Form.js
// https://47c8d0b.ngrok.com

'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var Form = React.createClass({
  getInitialState(){
    return {
      text: ''
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this._onPressButton}>
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

module.exports = Form;


