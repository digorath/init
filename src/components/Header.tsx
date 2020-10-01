import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../Colors';

import React from 'react';
import {Button} from './Button';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Initiative Tracker</Text>
      <Button label="Reset" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    height: 64,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    color: Colors.text,
  },
});
