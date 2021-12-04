import React, { useEffect } from 'react';
import SplashScreen from "react-native-splash-screen";
import NoConnectionScreen from "./Screens/NoConnectionScreen";

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  });


  return (
    <NoConnectionScreen />
  );
}