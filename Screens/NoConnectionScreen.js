import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator, Platform, BackHandler, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer, } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WaveIndicator } from 'react-native-indicators';
import { checkConnected } from '../functions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon  from "react-native-vector-icons/FontAwesome5";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Account = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [connectStatus, setConnectStatus] = useState(false);
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      }
    }
  }, []); // INITIALIZE ONLY ONCE

  const HandleBackPressed = () => {
    if (webView.current) {
      webView.current.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
  }

  checkConnected().then(res => {
    setConnectStatus(res)
  })

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
            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Homecopy')} />
          </View>
        </View>
      </View>
    );
  };

  return (
    connectStatus ?
      (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <WebView
              style={{ flex: 1 }}
              bounces={false}
              startInLoadingState={true}
              source={{ uri: 'https://ordingg.com/' }}
              showsHorizontalScrollIndicator={false}
              renderError={() => <Error />}
              scalesPageToFit={true}
              javaScriptEnabled={true} //Enable Javascript support
              domStorageEnabled={true}  //For the Cache
              onLoadStart={() => setVisible(true)}
              onLoad={() => setVisible(false)}
              ref={webView}
              onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            />
            {visible ? <Spinner /> : null}
          </View>
        </SafeAreaView>
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

            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Homecopy')} />

          </View>
        </View>
      )
  );
};

const Browse = ({ navigation, route }) => {

  const [visible, setVisible] = useState(false);
  const [connectStatus, setConnectStatus] = useState(false);
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      }
    }
  }, []); // INITIALIZE ONLY ONCE

  const HandleBackPressed = () => {
    if (webView.current) {
      webView.current.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
  }

  checkConnected().then(res => {
    setConnectStatus(res)
  })

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
            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Profilecopy')} />
          </View>
        </View>
      </View>
    );
  };

  return (
    connectStatus ?
      (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <WebView
              style={{ flex: 1 }}
              bounces={false}
              startInLoadingState={true}
              source={{ uri: 'https://ordingg.com/shop-2/' }}
              showsHorizontalScrollIndicator={false}
              renderError={() => <Error />}
              scalesPageToFit={true}
              javaScriptEnabled={true} //Enable Javascript support
              domStorageEnabled={true}  //For the Cache
              onLoadStart={() => setVisible(true)}
              onLoad={() => setVisible(false)}
              ref={webView}
              onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            />
            {visible ? <Spinner /> : null}
          </View>
        </SafeAreaView>

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

            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Profilecopy')} />

          </View>
        </View>
      )
  );
};

const PPage = ({ navigation, route }) => {

  const [visible, setVisible] = useState(false);
  const [connectStatus, setConnectStatus] = useState(false);
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      }
    }
  }, []); // INITIALIZE ONLY ONCE

  const HandleBackPressed = () => {
    if (webView.current) {
      webView.current.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
  }

  checkConnected().then(res => {
    setConnectStatus(res)
  })

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
            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Thirdtabcopy')} />
          </View>
        </View>
      </View>
    );
  };

  return (
    connectStatus ?
      (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <WebView
              style={{ flex: 1 }}
              bounces={false}
              startInLoadingState={true}
              source={{ uri: 'https://ordingg.com/my-account-2/' }}
              showsHorizontalScrollIndicator={false}
              renderError={() => <Error />}
              scalesPageToFit={true}
              javaScriptEnabled={true} //Enable Javascript support
              domStorageEnabled={true}  //For the Cache
              onLoadStart={() => setVisible(true)}
              onLoad={() => setVisible(false)}
              ref={webView}
              onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            />
            {visible ? <Spinner /> : null}
          </View>
        </SafeAreaView>

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

            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Thirdtabcopy')} />

          </View>
        </View>
      )
  );
};

const Accountcopy = ({ navigation, route }) => {

  const [visible, setVisible] = useState(false);
  const [connectStatus, setConnectStatus] = useState(false);
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      }
    }
  }, []); // INITIALIZE ONLY ONCE

  const HandleBackPressed = () => {
    if (webView.current) {
      webView.current.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
  }

  checkConnected().then(res => {
    setConnectStatus(res)
  })
  
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
            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Home')} />
          </View>
        </View>
      </View>
    );
  };

  return (
    connectStatus ?
      (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <WebView
              style={{ flex: 1 }}
              bounces={false}
              startInLoadingState={true}
              source={{ uri: 'https://ordingg.com/' }}
              showsHorizontalScrollIndicator={false}
              renderError={() => <Error />}
              scalesPageToFit={true}
              javaScriptEnabled={true} //Enable Javascript support
              domStorageEnabled={true}  //For the Cache
              onLoadStart={() => setVisible(true)}
              onLoad={() => setVisible(false)}
              ref={webView}
              onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            />
            {visible ? <Spinner /> : null}
          </View>
        </SafeAreaView>

      ) : (
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

            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Home')} />

          </View>
        </View>
      )
  );
};

const Browsecopy = ({ navigation, route }) => {

  const [visible, setVisible] = useState(false);
  const [connectStatus, setConnectStatus] = useState(false);
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      }
    }
  }, []); // INITIALIZE ONLY ONCE

  const HandleBackPressed = () => {
    if (webView.current) {
      webView.current.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
  }

  checkConnected().then(res => {
    setConnectStatus(res)
  })
  
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
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <WebView
              style={{ flex: 1 }}
              bounces={false}
              startInLoadingState={true}
              source={{ uri: 'https://ordingg.com/shop-2/' }}
              showsHorizontalScrollIndicator={false}
              renderError={() => <Error />}
              scalesPageToFit={true}
              javaScriptEnabled={true} //Enable Javascript support
              domStorageEnabled={true}  //For the Cache
              onLoadStart={() => setVisible(true)}
              onLoad={() => setVisible(false)}
              ref={webView}
              onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            />
            {visible ? <Spinner /> : null}
          </View>
        </SafeAreaView>

      ) : (
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
      )
  );
};

const PPagecopy = ({ navigation, route }) => {

  const [visible, setVisible] = useState(false);
  const [connectStatus, setConnectStatus] = useState(false);
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      }
    }
  }, []); // INITIALIZE ONLY ONCE

  const HandleBackPressed = () => {
    if (webView.current) {
      webView.current.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
  }

  checkConnected().then(res => {
    setConnectStatus(res)
  })
  
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
            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Thirdtab')} />
          </View>
        </View>
      </View>
    );
  };

  return (
    connectStatus ?
      (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <WebView
              style={{ flex: 1 }}
              bounces={false}
              startInLoadingState={true}
              source={{ uri: 'https://ordingg.com/my-account-2/' }}
              showsHorizontalScrollIndicator={false}
              renderError={() => <Error />}
              scalesPageToFit={true}
              javaScriptEnabled={true} //Enable Javascript support
              domStorageEnabled={true}  //For the Cache
              onLoadStart={() => setVisible(true)}
              onLoad={() => setVisible(false)}
              ref={webView}
              onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
            />
            {visible ? <Spinner /> : null}
          </View>
        </SafeAreaView>

      ) : (
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

            <Button title="Try Again" color="#464646" onPress={() => navigation.navigate('Thirdtab')} />

          </View>
        </View>
      )
  );
};

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 5) / 24);
const imageWidth = dimensions.width;
const { height } = Dimensions.get('window');

const Spinner = () => {
    return (
   <View style={styles.activityContainer}>
     <View style={styles.activityContainermain}>
     <Image
          source={require("../assets/ordinggtopnewone.png")}
          style={{ width: '100%', height: imageHeight }}
          resizeMode="contain"          
        />
        </View>
    <View>
    <ActivityIndicator size="large" color={'#E66C2C'} />
  </View>
  </View>
    )
}

const NoConnectionScreen = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Thirdtab" component={Thirdtab} />
        <Stack.Screen name="Homecopy" component={Homecopy} />
        <Stack.Screen name="Profilecopy" component={Profilecopy} />
        <Stack.Screen name="Thirdtabcopy" component={Thirdtabcopy} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Home = ({ navigation, route }) => {

  return (

    <Tab.Navigator initialRouteName="Account" screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Account" component={Account} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="home"
              size={26}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />
      <Tab.Screen name="Browse" component={Browse} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
           <Icon
              name="store"
              size={20}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

      <Tab.Screen name="PPage" component={PPage} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

    </Tab.Navigator>
  );
};

const Homecopy = ({ navigation, route }) => {

  return (

    <Tab.Navigator initialRouteName="Accountcopy" screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Accountcopy" component={Accountcopy} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="home"
              size={26}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />
      <Tab.Screen name="Browse" component={Browse} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
           <Icon
              name="store"
              size={20}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

      <Tab.Screen name="PPage" component={PPage} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

    </Tab.Navigator>
  );
};

const Profile = ({ navigation, route }) => {


  return (

    <Tab.Navigator initialRouteName="Browse" screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Account" component={Account} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="home"
              size={26}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />
      <Tab.Screen name="Browse" component={Browse} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
           <Icon
              name="store"
              size={20}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

      <Tab.Screen name="PPage" component={PPage} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />
    </Tab.Navigator>
  );
}

const Profilecopy = ({ navigation, route }) => {

  return (

    <Tab.Navigator initialRouteName="Browsecopy" screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Account" component={Account} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="home"
              size={26}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />
      <Tab.Screen name="Browsecopy" component={Browsecopy} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
           <Icon
              name="store"
              size={20}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

      <Tab.Screen name="PPage" component={PPage} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

    </Tab.Navigator>
  );
};

const Thirdtab = ({ navigation, route }) => {

  return (

    <Tab.Navigator initialRouteName="PPage" screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Account" component={Account} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="home"
              size={26}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />
      <Tab.Screen name="Browse" component={Browse} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
           <Icon
              name="store"
              size={20}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

      <Tab.Screen name="PPage" component={PPage} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

    </Tab.Navigator>
  );
};

const Thirdtabcopy = ({ navigation, route }) => {

  return (

    <Tab.Navigator initialRouteName="PPagecopy" screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Account" component={Account} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="home"
              size={26}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />
      <Tab.Screen name="Browse" component={Browse} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
           <Icon
              name="store"
              size={20}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

      <Tab.Screen name="PPagecopy" component={PPagecopy} options={{
        tabBarOptions: {
          activeTintColor: "#ff7300",
        },
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={tabInfo.focused ? "#ff7300" : "#8e8e93"}
            />
          )
        }
      }} />

    </Tab.Navigator>
  );
};


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
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },

  activityContainermain: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
  },

  animation: {
    width: 100,
    height: 100,
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