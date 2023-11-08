import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import ScreenNames from 'navigation/ScreenNames';
import {ScreenContainer} from 'components';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const isSkip = useSelector(state => state.auth.isSkip);
  const {t} = useTranslation();
  React.useEffect(() => {
    setTimeout(() => {
      console.log('isSkip :: ', isSkip);
      if (isSkip) {
        navigation.navigate(ScreenNames.BottomTabs);
      } else {
        navigation.navigate(ScreenNames.Onboarding);
      }
    }, 1000);
  }, []);

  return (
    <ScreenContainer style={styles.container} isDarkStatusBar={false}>
      <Text style={styles.seoudiTxt}>{t('StarBus')}</Text>
    </ScreenContainer>
  );
};

export default SplashScreen;
