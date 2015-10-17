/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} = React;

var Form = require('./components/Form');
var Messages = require('./components/Messages');

var Chat = React.createClass({
	addMessage(message) {
		console.log(message);
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Messages />
				<Form add={this.addMessage} />
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

module.exports = Chat;
