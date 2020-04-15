import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Profile extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
