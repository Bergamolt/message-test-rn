import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

import { Button } from '../../components/Button/Button';

export const MessageScreen = () => {
  const [message, setMessage] = useState('');
  const [counterSms, setCounterSms] = useState(0);
  const [counterChar, setCounterChar] = useState(60);

  const smsCounting = () =>
    message.trim() === ''
      ? setCounterSms(0)
      : setCounterSms(Math.ceil(message.length / counterChar));

  const editCountingChar = (value) => {
    if (value === '0' || isNaN(value)) {
      setCounterChar(60);
    } else {
      setCounterChar(value);
    }
  };

  return (
    <View style={styles.view}>
      <TextInput
        multiline={true}
        style={styles.input}
        textAlignVertical="top"
        value={message}
        onChangeText={setMessage}
      />
      <View style={styles.block}>
        <TextInput
          style={styles.inputChar}
          keyboardType="numeric"
          defaultValue={`${counterChar}`}
          onChangeText={(value) => editCountingChar(value)}
          onBlur={() =>
            counterChar === '' ? setCounterChar(60) : setCounterChar
          }
        />
        <Text style={styles.text}>символів</Text>
      </View>
      <Button smsCounting={smsCounting} />
      <View style={styles.block}>
        <Text style={styles.text}>Потрібно смс:</Text>
        <Text style={styles.counter}>{counterSms}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  inputChar: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  view: {
    height: '100%',
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#2F2E41',
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  counter: {
    fontWeight: '800',
    marginLeft: 10,
    color: '#ffffff',
    fontSize: 18,
  },
  text: {
    color: '#ffffff',
  },
});
