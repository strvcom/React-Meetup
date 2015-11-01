var Firebase = require('firebase');
var ref = new Firebase('https://rnchat.firebaseio.com/messages');

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

addMessage(message) {
  ref.push(message);
},
