import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import uploadToAnonymousFilesAsync from 'anonymous-files'

const PickImage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync()
    console.log(pickerResult)
    if (pickerResult.cancelled === true) {
      return;
    }
    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      console.log(remoteUri)
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }
  }
  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <View style={styles.container}>
      {
        selectedImage
          ? (
            <>
              <Image source={{ uri: selectedImage.localUri }} style={styles.logo} />
              <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
                <Text style={styles.buttonText}>Share</Text>
              </TouchableOpacity>
              <br />
              <TouchableOpacity onPress={() => setSelectedImage(null)} style={styles.delete_button}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </>
          )
          : <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      }
      <br />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    width: 150,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#4285F4',
  },
  delete_button: {
    width: 150,
    textAlign: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
})

export default PickImage;
