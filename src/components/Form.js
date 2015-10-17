var React = require('react-native');

var {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableHighlight
} = React;

var Form = React.createClass({
	getInitialState() {
		return {
			message: '',
			error: false,
			forUser: true
		}
	},
	componentWillReceiveProps(nextProps) {
		this.setState({
			forUser: nextProps.for === 'username' ? true : false
		});
	},
	handleSubmit() {
		if (this.state.message.length) {
			if (this.state.forUser) {
				this.props.setUsername(this.state.message);
			} else {
				this.props.add(this.state.message);
			}
			this.setState({
				message: '',
				error: false
			})
		} else {
			this.setState({
				error: true
			})
		}
	},
	render() {
		return(
			<View style={[styles.form, this.state.error && styles.formError]}>
				<TextInput
					onChangeText={(message) => this.setState({message})}
					value={this.state.message}
					placeholder={this.state.forUser ? "Your username" : "Type a message"}
					style={styles.input} />
				<TouchableHighlight
					underlayColor="#c0c0c0"
					onPress={this.handleSubmit}
					style={styles.button}>
					<Text style={styles.buttonText}>
						{this.state.forUser ? "Log in" : "Send"}
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	form: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#eee',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0
	},
	formError: {
		backgroundColor: 'red'
	},
	input: {
		flex: 1,
		height: 40,
		borderColor: '#ddd',
		borderWidth: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10
	},
	button: {
		height: 40,
		width: 80,
		backgroundColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

module.exports = Form;