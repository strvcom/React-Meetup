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
  container: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    borderColor: 'red',
    padding: 10,
    backgroundColor: '#eee',
    height: 50
  },
  button: {
    backgroundColor: '#c81b55',
    width: 80,
    height: 50,
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
