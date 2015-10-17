# Windows installation

  - Install NodeJS - https://nodejs.org/en/
  - Install Java SDK - http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
  - Install Android SDK - https://developer.android.com/sdk/index.html#Other
  - Configure HAXM on Windows - http://developer.android.com/tools/devices/emulator.html#vm-windows
  - Configure Emulator (go to AndroidSDK -> run AVD manager -> click new) - https://facebook.github.io/react-native/docs/android-setup.html#install-and-run-android-stock-emulator
  - Set ANDROID_HOME environment variable to AndroidSDK path (Control Panel -> System and Security -> System -> Change settings -> Advanced -> Environment variables -> New)
  - npm install -g react-native-cli
  - react-native init Chat
  - change package.json start: "node node_modules/react-native/packager/packager.js"
  - start emulator
  - run react-native run-android
  - run npm start