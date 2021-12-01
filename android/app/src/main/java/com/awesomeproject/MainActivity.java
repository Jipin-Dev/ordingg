package com.awesomeproject;

// mWebView = (WebView) findViewById(R.id.webView);
// private WebView mWebView;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  
  @Override
  protected String getMainComponentName() {
    return "AwesomeProject";
  }

 @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, true);  // here
        super.onCreate(savedInstanceState);
    }
    

// @Override
// public boolean onKeyDown(int keyCode, KeyEvent event) {
//     if (event.getAction() == KeyEvent.ACTION_DOWN) {
//         switch (keyCode) {
//             case KeyEvent.KEYCODE_BACK:
//                 if (mWebView.canGoBack()) {
//                     mWebView.goBack();
//                 } else {
//                     finish();
//                 }
//                 return true;
//         }

//     }
//     return super.onKeyDown(keyCode, event);
// }

}
