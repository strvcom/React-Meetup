'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Chat = require('./app/Chat');

AppRegistry.registerComponent('Chat', () => Chat);
