import React, { useState } from 'react';
import { 
  Text, 
  Dimensions,
  View, 
  TouchableOpacity, 
  StyleSheet, 
  Modal, 
  TouchableWithoutFeedback, 
  Image, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

import ModalCircle from './ModalCircle';
import colors from '../config/colors';

import defaultProfile from "../components/defaultProfile";

const ImageUpload = () =>{
  const [modalProfileVisible, setModalProfileVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(defaultProfile.defaultProfileUri);


  const choosePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      avoidEmptySpaceAroundImage: true,
      cropperStatusBarColor: "black",
      cropperToolbarColor: "black",
      cropperToolbarWidgetColor: "white",
      freeStyleCropEnabled: true,
      cropperToolbarTitle: '',
      disableCropperColorSetters: false,
      hideBottomControls: true,
      enableRotationGesture: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setModalVisible(false)
    }).catch(error => console.log(error));
  }

  const choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      avoidEmptySpaceAroundImage: true,
      cropperStatusBarColor: "black",
      cropperToolbarColor: "black",
      cropperToolbarWidgetColor: "white",
      freeStyleCropEnabled: true,
      cropperToolbarTitle: '',
      disableCropperColorSetters: false,
      hideBottomControls: true,
      enableRotationGesture: true,

    }).then(image => {
      console.log(image);
      setImage(image.path);
      setModalVisible(false)
    }).catch(error => console.log(error));
  }

  return (
    <>
      <View style={styles.container}>

        <TouchableOpacity style={styles.imageContainer} onPress={() => setModalProfileVisible(true)}>
          <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.changeButton} onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons name="camera-image" size={20} color={colors.white} />
          <Text style={styles.text}>Change</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={{ flex: 1, backgroundColor: colors.blackLight }} >
              <View style={styles.modal} >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Upload Photo</Text>
                <View style={{ flexDirection: 'row', margin: 5 }}>

                  <ModalCircle onPress={choosePhotoFromCamera} icon="camera" title="Camera" backgroundColor="#339933" />
                  <ModalCircle onPress={choosePhotoFromGallery} icon="image" title="Gallery" backgroundColor="#bf4080" />
                  <ModalCircle onPress={() => console.log('photo deleted')} icon="trash" title="Remove" backgroundColor="#ff471a" />

                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>

      <Modal
        visible={modalProfileVisible}
        animationType="slide"
        onRequestClose={() => setModalProfileVisible(false)}
      >
        <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
        <SafeAreaView style={styles.profileModal} >
          <View style={styles.profileHeader}>
            <TouchableWithoutFeedback onPress={() => setModalProfileVisible(false)}>
              <MaterialCommunityIcons name="arrow-left" size={30} color={colors.white} />
            </TouchableWithoutFeedback>
            <Text style={styles.profileText}>Profile</Text>
          </View>
          <Image style={styles.profileImage} source={{ uri: image }} />
        </SafeAreaView>

      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75,
    overflow: 'hidden'
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 75,
    backgroundColor: '#808080AA',
    borderWidth: 1,
    borderColor: '#808080AA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  changeButton: {
    width: 110,
    height: 25,
    flexDirection: 'row',
    backgroundColor: colors.orangeColor,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25,
    borderWidth: 4,
    borderColor: colors.white,
    padding: 15
  },
  text: {
    color: colors.white,
    padding: 6,
    fontWeight: "bold",
    fontSize: 16
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    maxHeight: Dimensions.get('window').height * 0.4,
  },
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    paddingLeft: 20
  },
  profileImage: {
    width: '100%',
    height: '70%',
  },
  profileModal: {
    flex: 1,
    backgroundColor: colors.black
  },
  profileHeader: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 15,
    alignItems: 'center'
  }
})

export default ImageUpload;