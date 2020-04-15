import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Settings extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Page</Text>
      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
