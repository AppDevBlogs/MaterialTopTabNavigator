import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Home extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
