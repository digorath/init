import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../Colors';

type Props = {
  color?: Colors;
  onPress: () => void;
  label: string;
};

export const Button = ({color, onPress, label}: Props) => {
  const styles = getStyles(color);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (color?: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: color ?? Colors.primary,
      borderRadius: 4,
      flex: 1,
      justifyContent: 'center',
      margin: 4,
    },
    text: {
      textAlign: 'center',
      color: Colors.text,
      fontSize: 32,
    },
  });
