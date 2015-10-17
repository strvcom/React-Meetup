/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableHighlight
} = React;

var Form = React.createClass({
	getInitialState() {
		return {
			text: ''
		}
	},
	handleSubmit(){
		this.props.add(this.state.text);
	},
	render: function() {
		return (
			<View style={styles.container}>
					<TextInput
				    style={styles.input}
				    onChangeText={(text) => this.setState({text})}
				    value={this.state.text}
				  />
				  <TouchableHighlight
				  	style={styles.button}
				  	onPress={()=> this.handleSubmit()}
				  	underlayColor="#c0c0c0">
				  	<Text style={styles.buttonText}>Send</Text>
				  </TouchableHighlight>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#f6f6f6'
	},
	input: {
		flex: 1,
		height: 50,
		borderColor: '#ccc',
		borderWidth: 1,
		backgroundColor: '#fff'
	},
	button: {
		width: 80,
		height: 50,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

module.exports = Form;
