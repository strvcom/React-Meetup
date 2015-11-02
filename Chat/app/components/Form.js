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
  _onPressButton() {
    if(this.state.text) {
      this.props.add(this.state.text);
      this.setState({
        text: ''
      })
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
          underlayColor="#a41646"
          style={styles.button}
          onPress={this._onPressButton}>
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#ccc',
    padding: 10
  },
  button: {
    width: 80,
    height: 50,
    backgroundColor: '#c81b55',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5
  }
});

module.exports = Form;


