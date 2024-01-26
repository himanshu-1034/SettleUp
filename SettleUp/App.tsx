import React from 'react';
import type { ReactElement } from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App(): ReactElement {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <MainApplication />
    </Provider>
  );
}

const MainApplication = (): ReactElement => {
  return (
    <>

    </>
  )
}

const styles = StyleSheet.create({
});

export default App;
