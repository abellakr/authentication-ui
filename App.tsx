import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import config from './src/aws-exports';

import {withAuthenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(config);

function App(): React.JSX.Element {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Full name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Username',
      key: 'preferred_username',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
    },
  ],
};

export default App;
