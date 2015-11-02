//Chat.js

var React = require('react-native');

var ProgressBar = require('ProgressBarAndroid');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  ActivityIndicatorIOS
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
      username: 'Daniel Kijkov'
    }
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
  componentDidMount() {
    ref.once('value', () => this.setState({isLoading: false}))
    this.childAdded = ref.on('child_added', (snapshot)=> {
      console.log('child_added');
      var messages = this.state.data;
      var message = snapshot.val();

      messages.push(message);

      this.setState({
        data: messages
      });
    });
  },
  addMessage(message) {
    var messages = this.state.data;
    var message = {
      date: Firebase.ServerValue.TIMESTAMP,
      content: message,
      author: this.state.username
    }
    ref.push(message);
  },
  render() {
    if(this.state.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          {
             Platform.OS === 'ios' ?
              <ActivityIndicatorIOS
                animating={true}
                style={styles.spinner}
                size="large"
              /> :
              <ProgressBar styleAttr="Inverse" />
          }
        </View>
      );
    } else {
      return(
        <View ref="container" style={styles.container}>
          <ScrollView ref="helperView">
            <View ref="helperViewInner" style={styles.container, styles.outerContainer}>
              <Messages data={this.state.data} />
            </View>
          </ScrollView>
          <Form ref="form" for="message" add={this.addMessage} />
        </View>
      );
    }
  }
});

var styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerContainer: {
    paddingBottom: 50,
  },
  container: {
    flex: 1
  }
})

module.exports = Chat;
