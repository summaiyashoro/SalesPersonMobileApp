import React from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
  Dimensions,
  Image
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import defaultProfileUri from "../components/defaultProfile";

class MapScreen extends React.Component {
  mounted = false;
  constructor() {
    super();

    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
    };
  }

  gettingCurrentPosition() {
    Geolocation.getCurrentPosition(
      position => {
        if (this.mounted) {
          this.setState({
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
            coordinates: this.state.coordinates.concat({
              latitude: parseFloat(position.coords.latitude),
              longitude: parseFloat(position.coords.longitude)
            })
          });
        }
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      });
  }

  tracePosition() {
    Geolocation.watchPosition(
      position => {
        if (this.mounted) {
          this.setState({
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
            coordinates: this.state.coordinates.concat({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
          });
        }
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0,
      },
    )
  }

  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      this.gettingCurrentPosition();
      this.tracePosition();
    } else {
      if (this.mounted) {
        try {
          let granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'App needs to access the location to make this feature work',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancil',
              buttonPositive: 'OK'
            }
          );

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            this.gettingCurrentPosition();
            this.tracePosition();
          } else {
            alert('Turn on Location permission to make this feature work!');
          }

        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.requestLocationPermission();
  }

  render() {
    return (
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            style={styles.map}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0922 * (Dimensions.get('window').width / Dimensions.get('window').height),
            }}
          >
            <Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
            >
              <View>
                <Image source={{uri:defaultProfileUri}} style={{ width: 30, height: 30, borderRadius: 15 }} />
              </View>
            </Marker>
            <Polyline
              coordinates={this.state.coordinates}
              strokeColor="#bf8221"
              strokeColors={[
                '#bf8221',
                '#ffe066',
                '#ffe066',
                '#ffe066',
                '#ffe066',
              ]}
              strokeWidth={3}
            />
          </MapView>
        </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  },
});

export default MapScreen;