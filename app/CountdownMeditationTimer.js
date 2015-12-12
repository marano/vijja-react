'use strict';

var moment = require('moment');
var React = require('react-native');
var TimerMixin = require('react-timer-mixin');

var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var timer = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      timerStartedAt: undefined,
      timeCounter: '00:00'
    };
  },
  componentDidMount: function () {
    this.setInterval(
      () => {
        if (this.state.timerStartedAt) {
          var runningFor = moment().diff(this.state.timerStartedAt);
          this.setState({ timeCounter: moment(runningFor).format('mm:ss') });
        }
      }, 500
    );
  },
  _startTimer: function () {
    this.setState({ timerStartedAt: moment() });
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Text>{this.state.timeCounter}</Text>
        <TouchableHighlight onPress={this._startTimer}>
          <Text>Start Timer</Text>
        </TouchableHighlight>
      </View>
    )
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = timer;