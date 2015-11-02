//messages.js

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  TouchableHighlight,
  View,
} = React;

var Messages = React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds,
    };
  },
  render() {
    return(
      <ListView
        style={{flex: 1}}
        dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
});

var styles = StyleSheet.create({
});

module.exports = Messages;
