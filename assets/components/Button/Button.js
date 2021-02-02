import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export const Button = ({ smsCounting }) => {
  return (
    <View style={styles.block}>
      <TouchableOpacity style={styles.btn} onPress={smsCounting}>
        <Text style={styles.text}>Порахувати кількість смс</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#9d9cb5',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
  block: {
    width: '100%',
    alignItems: 'center',
  },
});
