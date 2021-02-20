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
  ImageBackground,
  Alert,
  Switch,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
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

const selectData = [
  { id: '001', title: '001' },
  { id: '002', title: '002' },
  { id: '003', title: '003' },
  { id: '004', title: '004' },
]

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={styles.item, style}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
)
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Test() {
  const [isHungry, setIsHungry] = useState(true)
  const [view, setView] = useState(true)
  const [text, setText] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  // const toggleSwitch = (value) => setIsEnabled(value)
  const toggleSwitch = (value) => {
    setIsEnabled(value)
    console.log(value)
  }
  const [refreshing, setRefreshing] = React.useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false))
  }, [])
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#bfa' : "rgba(66,133,244, .5)"
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    )
  }
  return (
    <View>
      <View style={styles.container}>
        <Text>Hello, React Native</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
      <FlatList
        data={selectData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <Button
        onPress={() => { Alert.alert('You have pressed me!') }}
        title="Learn More"
        color="#4285F4"
      />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }} //按钮颜色
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} //按钮轨道背景颜色
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
      <View style={{ height: 300 }}>
        <Image source={require('../assets/awesome.png')} style={{ flex: 1, width: undefined, height: undefined }} />
      </View>
      <ImageBackground source={require('../assets/awesome.png')} style={{ width: '100%', height: 192 }}>
        <Text style={{ color: 'white' }}>Foryuxuan</Text>
      </ImageBackground>
      <View style={{ height: 400 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    // flex: 1,
    height: 300,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  item: {
    padding: 24,
    marginHorizontal: 16,
    marginVertical: 24,
  },
  title: {
    fontSize: 32,
  }
});
