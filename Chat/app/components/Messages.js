// Messages.js

'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  ListView,
  View,
} = React;

var Messages = React.createClass({
  getInitialState(){
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

    return (
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
    return (
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
        renderRow={this.renderRow}
      />
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 5
  },
  container: {
    padding: 10,
    paddingHorizontal: 15,
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  author:{
    fontWeight: 'bold',
    color: '#c81b55',
    flex: 1
  },
  date: {
    color: '#666'
  },
  content: {

  }
});

module.exports = Messages;


