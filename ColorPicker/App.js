/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleHeader}> Color Picker </Text>
          </View>
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    height: 65,
    backgroundColor: "#eceff1",
    alignItems: "center",
    justifyContent: "center",
  },
  titleHeader: {
    color: "black",
    fontSize: 18,
  }
});

export default App;
