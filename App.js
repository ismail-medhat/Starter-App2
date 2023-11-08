import React from 'react';
import {LogBox} from 'react-native';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18n from 'language/i18n';
import Toast from 'react-native-toast-message';
const App = () => {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <AppNavigator />
          <Toast ref={ref => Toast.setRef(ref)} />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
