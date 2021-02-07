import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import Cat from './Cat'

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello, React Native</Text>
      </View>
      <View style={styles.container}>
        <Text>Nothing Can Be Founded!</Text>
        <Image
          source={{
            uri: './assets/icon.png',
          }}
        />
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <ScrollView>
        <TextInput defaultValue="Okay, Let's Go" />
      </ScrollView>
      <Cat name="Hana" />
      <Cat name="Twin" />
      <Cat name="Sei" />
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
