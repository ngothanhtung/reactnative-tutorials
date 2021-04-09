import React, { Component } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

import * as Font from 'expo-font';
// Session 03
import HandlingTextInput from './src/Session03/Examples/HandlingEvent/HandlingTextInput';
import LifeCycle from './src/Session03/Examples/LifeCycle';

// Session 04
import Basic from './src/Session04/Basic';

// Session 05
import ScrollViewExample from './src/Session05/ScrollViewExample';
import ScrollViewWithManyDataExample from './src/Session05/ScrollViewWithManyDataExample';
import FlatListExample from './src/Session05/FlatListExample';
import SectionListExample from './src/Session05/SectionListExample';
import SectionListAdvancedExample from './src/Session05/SectionListAdvancedExample';

// Eatme
import LoginScreen from './src/Eatme/LoginScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView
          style={{
            flex: 1,
            // alignItems: Platform.OS === 'web' ? 'center' : null,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: Platform.OS === 'web' ? 'row' : 'column',
              minWidth: Platform.OS === 'web' ? 414 : '100%',
              minHeight: Platform.OS === 'web' ? 812 : null,
            }}
          >
            {Platform.OS === 'web' && <View style={{ flex: 1, backgroundColor: 'orange' }}></View>}
            {/* <LoginScreen /> */}
            {/* <HandlingTextInput /> */}
            {/* <LifeCycle /> */}
            {/* <Basic /> */}
            {/* <ScrollViewExample /> */}
            {/* <ScrollViewWithManyDataExample /> */}
            {/* <FlatListExample /> */}
            {/* <SectionListExample /> */}
            <SectionListAdvancedExample />
          </View>
        </SafeAreaView>
      );
    } else {
      return null;
    }
  }
}
