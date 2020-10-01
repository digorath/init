import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../Colors';

import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {createResetAction} from '../actions/ActionCreators';

export const Header = () => {
  const dispatch = useDispatch();

  const onPressReset = useCallback(() => dispatch(createResetAction()), [
    dispatch,
  ]);

  return (
    <View style={styles.header}>
      <View style={styles.spacer} />
      <Text style={styles.title}>Initiative Tracker</Text>
      <TouchableOpacity style={styles.reset} onPress={onPressReset}>
        <Icon size={48} name="repeat" color={Colors.text} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.surface,
    flexDirection: 'row',
    height: 64,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  icon: {
    alignSelf: 'center',
  },
  reset: {
    backgroundColor: Colors.primary,
    height: 64,
    width: 64,
    justifyContent: 'center',
  },
  spacer: {
    width: 64,
  },
  title: {
    fontSize: 32,
    color: Colors.text,
    textAlignVertical: 'center',
  },
});
