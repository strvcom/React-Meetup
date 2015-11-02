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
  renderRow(rowData){
    var {
      date,
      author,
      content
    } = rowData;

    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  },
  render() {
    return(
      <ListView
        style={{flex: 1}}
        dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
        renderRow={this.renderRow}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5
  },
  author: {
    flex: 1,
    fontWeight: 'bold',
    color: '#c81b55'
  },
  date: {
    color: '#666'
  },
  content: {

  }
});

module.exports = Messages;
