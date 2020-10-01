import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {createAddAction, createNextAction} from '../actions/ActionCreators';
import {Colors} from '../Colors';
import {Button} from './Button';

export const Footer = () => {
  const dispatch = useDispatch();

  const onPressNew = () => dispatch(createAddAction());
  const onPressNext = () => dispatch(createNextAction());

  return (
    <View style={styles.footer}>
      <Button onPress={onPressNew} label="New" />
      <Button onPress={onPressNext} label="Next" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: Colors.surface,
  },
  safeAreaView: {
    backgroundColor: Colors.backGround,
    flex: 1,
  },
});
