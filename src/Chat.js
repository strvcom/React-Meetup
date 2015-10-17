var React = require('react-native');

var {
	ActivityIndicatorIOS,
	ProgressBarAndroid,
	View,
	Platform,
	Text,
	StyleSheet,
	ScrollView
} = React;

var Firebase = require('firebase');
var ref = new Firebase('https://rnchat.firebaseio.com/messages');

var Form = require('./components/Form');
var Messages = require('./components/Messages');

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

var Chat = React.createClass({
	getInitialState() {
		return {
			data: [],
			isLoading: true,
			username: ''
		}
	},
	componentDidMount() {
		ref.once('value', () => this.setState({isLoading: false}))
		this.childAdded = ref.on('child_added', (snapshot)=> {
			var messages = this.state.data;
			var message = snapshot.val();

			messages.push(message);

			this.setState({
				data: messages
			});
		});
	},
	componentWillUnmount(){
		ref.off('child_added', this.childAdded);
	},
	componentDidUpdate() {
		setTimeout(()=>{
			this.scrollBottom();
		},200);
	},

	scrollBottom() {
		this.refs.helperViewInner.measure((oxInner, oyInner, widthInner, heightInner) => {
			this.refs.container.measure((ox, oy, width, height) => {
				if (heightInner < height) return;
				this.refs.helperView.scrollTo(heightInner - height + oyInner);
			});
		});
	},
	addMessage(message) {
		var messages = this.state.data;
		var message = {
			date: Date.now(),
			content: message,
			author: this.state.username
		}

		ref.push(message);

		this.setState({
			data: messages
		});
	},
	setUsername(username){
		this.setState({
			username: username
		})
	},

	render() {
		if(this.state.isLoading) {
			return(
				<View style={[styles.container, styles.loading]}>
					{
						Platform.OS === 'ios' ?
						<ActivityIndicatorIOS animating={true} size="large"/> :
						<ProgressBarAndroid styleAttr="Inverse" />
					}
				</View>
			);
		} else {
			return(
				<View ref="container" style={styles.container}>
					<ScrollView ref="helperView">
						<View ref="helperViewInner" style={[styles.container, {paddingBottom: 60}]}>
							<Messages data={this.state.data} />
						</View>
					</ScrollView>
					{this.state.username ? <Form ref="form" for="message" add={this.addMessage} /> : <Form ref="form" for="username" setUsername={this.setUsername} />}
				</View>
			);
		}
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	loading: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

module.exports = Chat;