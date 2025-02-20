import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to React Native </Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>superman</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>shaktiman  </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e2f',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#61dafb',
    marginBottom: 20,
  },
  counter: {
    fontSize: 22,
    color: '#61dafb',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9370db',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 300,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#ff4c4c',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
