import {Colors, Fonts} from 'common';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBox: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.primaryColor,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontFamily: Fonts.bold,
    color: Colors.whiteColor,
  },
});

export default styles;
