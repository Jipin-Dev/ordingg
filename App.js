import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { WaveIndicator } from 'react-native-indicators';
import SplashScreen from  "react-native-splash-screen";
import { checkConnected } from './functions';
import NoConnectionScreen from "./Screens/NoConnectionScreen";

export default function App() {
  const [connectStatus, setConnectStatus] = useState(false)

  React.useEffect(() => {
    SplashScreen.hide();
  });
  
  const Spinner = () => (
    <View style={styles.activityContainer}>
      <WaveIndicator color={'#E66C2C'} />
    </View>
  );

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
            source={require('./assets/nointernet_ordingg2.jpg')}
            style={{ width: 300, height: 400, }}
            resizeMode="contain"
          />
          <View >
            <Text style={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: 16 }} >SORRY!</Text>
            <Text style={{ color: 'rgba(0,0,0,0.3)', fontWeight: '100', fontSize: 14 }} >Your network connection is very slow. Please hit Try Again.</Text>
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
          scalesPageToFit
        />

      ) : (
        <NoConnectionScreen onCheck={checkConnected} />
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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


});