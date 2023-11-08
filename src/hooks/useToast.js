import Toast from 'react-native-toast-message';
import {ScaleHeight} from 'common';

const useToast = () => {
  const showToast = () => {
    Toast.show({
      type,
      text1,
      text2,
      position,
      visibilityTime: 2000,
      topOffset: ScaleHeight(50),
      bottomOffset: ScaleHeight(50),
    });
  };

  const showSuccessToast = () => {
    showToast('success', position, text1, text2);
  };

  const showErrorToast = () => {
    showToast('error', position, text1, text2);
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
};

export default useToast;
