var React = require('react-native');
var moment = require('moment');

var {
	View,
	Text,
	TextInput,
	StyleSheet,
	ListView,
	TouchableHighlight
} = React;

var Messages = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds
		};
	},

	renderRow(rowData) {
		var {
			author,
			date,
			content
		} = rowData;

		return(
			<View style={styles.container}>
				<Text style={styles.date}>{moment(date).fromNow()}</Text>
				<Text style={styles.author}>{author}</Text>
				<Text style={styles.content}>{content}</Text>
			</View>
		);
	},

	render: function() {
		return (
			<ListView
				dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
				renderRow={(rowData) => this.renderRow(rowData)}
			/>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		padding: 15,
		borderColor: '#ccc',
		borderBottomWidth: 1
	},
	date: {
		fontStyle: 'italic'
	},
	author: {
		fontWeight: 'bold',
		marginVertical: 5
	}
});

module.exports = Messages;