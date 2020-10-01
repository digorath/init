import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {Colors} from './src/Colors';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header} />
      <ScrollView style={styles.listContainer} />
      <View style={styles.footer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 64,
    backgroundColor: Colors.surface,
  },
  header: {
    height: 64,
    backgroundColor: Colors.surface,
  },
  listContainer: {
    flex: 1,
  },
  safeAreaView: {
    backgroundColor: Colors.backGround,
    flex: 1,
  },
});

export default App;
