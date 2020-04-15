import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import MainScreenNavigator from './app/config/router';

class App extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2b2b39" barStyle="light-content" />
        <MainScreenNavigator />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
