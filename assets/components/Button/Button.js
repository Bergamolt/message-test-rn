import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Button = ({smsCounting}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={smsCounting}>
      <Text>Порахувати кількість СМС</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    width: '80%',
  }
})