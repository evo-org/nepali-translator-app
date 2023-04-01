import { View, Pressable, ColorSchemeName } from 'react-native';

import { Feather, Fontisto } from '@expo/vector-icons';
import { isInDarkMode } from '../utils/Visual';

export default function DarkMode(props: {
  darkMode: ColorSchemeName;
  onChange: React.Dispatch<React.SetStateAction<ColorSchemeName>>;
}) {
  function onPressHandler() {
    if (isInDarkMode(props.darkMode)) {
      props.onChange('light');
    } else {
      props.onChange('dark');
    }
  }

  return (
    <View
      style={{
        top: 40,
        left: 20,
        position: 'absolute',
      }}
    >
      <Pressable onPress={onPressHandler}>
        {isInDarkMode(props.darkMode) ? (
          <Fontisto
            name="night-clear"
            size={16}
            color="#1C7293"
          />
        ) : (
          <Feather
            name="sun"
            size={16}
            color="#1C7293"
          />
        )}
      </Pressable>
    </View>
  );
}
