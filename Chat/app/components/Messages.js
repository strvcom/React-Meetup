/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var moment = require('moment');

var {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableHighlight,
	ListView
} = React;

var data = [
	{
		date: 1445063492153,
		content: 'Hi! Ready for workshop?',
		author: 'Daniel Kijkov'
	},
	{
		date: 1445063535719,
		content: 'I was born to be ready',
		author: 'Vladimir Vanek'
	},
	{
		date: 1445063558454,
		content: 'Yo guys! Beer after workshop?',
		author: 'Josef Zavisek'
	},
	{
		date: 1445063565969,
		content: 'I am in :)',
		author: 'Vladimir Vanek'
	},
	{
		date: 1445063571618,
		content: 'Fo sho!',
		author: 'Daniel Kijkov'
	}
]

var Messages = React.createClass({
	getInitialState: function() {
	  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  return {
	    dataSource: ds,
	  };
	},
	renderRow(rowData) {
		var {
			date,
			author,
			content
		} = rowData;

		return(
			<View style={styles.container}>
				<Text style={styles.date}>{moment(date).fromNow()}</Text>
				<Text style={styles.author}>{author}: <Text style={styles.content}>{content}</Text>
				</Text>
			</View>
		);
	},
	render() {
		return (
			<ListView
	      dataSource={this.state.dataSource.cloneWithRows(data)}
	      renderRow={(rowData) => this.renderRow(rowData)}
	    />
		);
	}
});

var styles = StyleSheet.create({
	container: {
		padding: 10,
		borderColor: '#ccc',
		borderBottomWidth: 1
	},
	author: {
		fontWeight: 'bold'
	},
	content: {
		fontWeight: 'normal'
	}
});

module.exports = Messages;
