import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  FlatList,
  SectionList,
} from 'react-native';

const listData = [
  { key: 'Jhon' },
  { key: 'David' },
  { key: 'Thmaos' },
  { key: 'Riven' },
  { key: 'Zed' },
  { key: 'Zoe' },
  { key: 'Master Yi' },
  { key: 'Yasuo' },
]
const sectionData = [
  { title: 'Archer', data: ['Miss Fortune', 'Jinx', 'Jin'] },
  { title: 'Mage', data: ['Zoe', 'Zed', 'Akali'] }
]

export default function App() {
  const [isHungry, setIsHungry] = useState(true)
  const [view, setView] = useState(true)
  const [text, setText] = useState('')
  return (
    <>
      <View style={styles.container}>
        <Text>Hello, React Native</Text>
      </View>
      <View style={styles.container}>
        <Text>Nothing Can Be Founded!</Text>
        {/* 这个Image的uri的路径问题不是很清楚 */}
        {/* <Image
          source={{
            uri: './assets/icon.png',
          }}
        /> */}
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>I'm Kitty and I'm {isHungry ? 'so hungry' : 'full'}</Text>
        <Button
          onPress={() => setIsHungry(false)}
          disabled={!isHungry}
          title={isHungry ? 'Give me some milk, please' : 'Thank you!'}
        />
        <Text>{view ? 'I see you!' : 'Where are you?'}</Text>
        <Button
          onPress={() => setView(!view)}
          title="Click me to toggle tips"
        />
      </View>
      <View style={{ height: '200px', }}>
        <TextInput
          style={{ height: 80 }}
          placeholder="Tab here to translate"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Button
          onPress={() => setText('')}
          title="Reset"
        />
        <Text style={{ fontSize: 30 }}>
          {text.split(' ').map(word => word && '👽').join(' ')}
        </Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={listData}
          renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
        />
      </View>
      <View style={styles.listView}>
        <SectionList
          sections={sectionData}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  listView: {
    height: 200,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  listItem: {
    textAlign: 'center',
    fontSize: 30,
  },
  sectionHeader: {
    fontSize: 35,
    color: 'green',
    fontStyle: 'bold'
  }
});
