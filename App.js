import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello, React Native</Text>
      </View>
      <View style={styles.container}>
        <Text>Nothing Can Be Founded!</Text>
        <Image source={{ url: 'assets/favicon.png' }} />
      </View>
      <ScrollView>
        <TextInput defaultValue="Okay, Let's Go" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
