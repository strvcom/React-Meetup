//Form.js

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var Form = React.createClass({
  getInitialState() {
    return {
      text: ''
    }
  },
  _onPressButton() {
    console.log('button pressed');
  },
  render() {
    return(
      <View>
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
    borderColor: 'red',
    height: 50
  },
  button: {

  },
  buttonText: {

  }
});

module.exports = Form;
