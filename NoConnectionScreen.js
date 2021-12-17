import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer, } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WaveIndicator } from 'react-native-indicators';
import { checkConnected } from '../functions';

const Stack = createNativeStackNavigator();

const Spinner = () => (
  <View style={styles.activityContainer}>
    <WaveIndicator color={'#E66C2C'} />
  </View>
);

const NoConnectionScreen = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = ({ navigation, route }) => {
  const [connectStatus, setConnectStatus] = useState(false)

  checkConnected().then(res => {
    setConnectStatus(res)
  })

  const alertSomething = () => {
    alert('alert something')
  }

  const Error = () => {
    return (
      <View style={styles.loadingWrapper}>
        <View style={styles.container}>
          <Image
            source={require('../assets/nointernet_ordingg.jpg')}
            style={{ width: 400, height: 400, }}
            resizeMode="contain"
          />
          <View >
            <Text style={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: 16 }} >OOPS!</Text>
            <Text style={{ color: 'rgba(0,0,0,0.3)', fontWeight: '100', fontSize: 14 }} >Please check your network connection.</Text>
          </View>
          <View style={styles.button}>
            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Profile')} />
          </View>
        </View>
      </View>
    );
  };

  return (
    connectStatus ?
      (
        <WebView
          bounces={false}
          startInLoadingState={true}
          renderLoading={Spinner}
          source={{ uri: 'https://ordingg.com/' }}
          showsHorizontalScrollIndicator={false}
          renderError={() => <Error />}
          scalesPageToFit />

      ) : (
        <View style={styles.container}>
          <Image
            source={require('../assets/nointernet_ordingg.jpg')}
            style={{ width: 400, height: 400, }}
            resizeMode="contain"
          />
          <View style={{ marginTop: 0 }}>
            <Text style={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: 16 }} >OOPS!</Text>
            <Text style={{ color: 'rgba(0,0,0,0.3)', fontWeight: '100', fontSize: 14 }} >Please check your network connection.</Text>
          </View>
          <View style={styles.button}>
            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Profile')} />
          </View>
        </View>
      )
  );
};

const ProfileScreen = ({ navigation, route }) => {
  const [connectStatus, setConnectStatus] = useState(false)

  checkConnected().then(res => {
    setConnectStatus(res)
  })

  const alertSomething = () => {
    alert('alert something')
  }

  const Error = () => {
    return (
      <View style={styles.loadingWrapper}>
        <View style={styles.container}>
          <Image
            source={require('../assets/nointernet_ordingg2.jpg')}
            style={{ width: 300, height: 400, }}
            resizeMode="contain"
          />
          <View >
            <Text style={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: 16 }} >OOPS!</Text>
            <Text style={{ color: 'rgba(0,0,0,0.3)', fontWeight: '100', fontSize: 14 }} >Please check your network connection.</Text>
          </View>
          <View style={styles.button}>
            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Home')} />
          </View>
        </View>
      </View>
    );
  };

  return (
    connectStatus ?
      (
        <WebView
          bounces={false}
          startInLoadingState={true}
          renderLoading={Spinner}
          source={{ uri: 'https://ordingg.com/' }}
          showsHorizontalScrollIndicator={false}
          renderError={() => <Error />}
          scalesPageToFit />

      ) : (
        <View style={styles.container}>
          <Image
            source={require('../assets/nointernet_ordingg2.jpg')}
            style={{ width: 300, height: 400, }}
            resizeMode="contain"
          />
          <View >
            <Text style={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: 16 }} >OOPS!</Text>
            <Text style={{ color: 'rgba(0,0,0,0.3)', fontWeight: '100', fontSize: 14 }} >Please check your network connection.</Text>
          </View>
          <View style={styles.button}>

            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Home')} />

          </View>
        </View>
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: 'white'
  },

  button: {
    borderRadius: 1,
    elevation: 3,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 10, height: 13 },
    marginTop: 24,
    width: 250,
  },

  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },

  loadingWrapper: {
    backgroundColor: 'white',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
  },

});

export default NoConnectionScreen;