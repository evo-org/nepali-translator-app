import { StyleSheet, Text, View, ColorSchemeName } from 'react-native';
import { isInDarkMode } from '../utils/Visual';

export default function TranslationOutput(props: {
  translation: string;
  darkMode: ColorSchemeName;
}) {
  return (
    <View style={styles(props).container}>
      <Text
        numberOfLines={10}
        style={styles(props).translationOutput}
      >
        {props.translation}
      </Text>
    </View>
  );
}
const styles = (props: { translation: string; darkMode: ColorSchemeName }) =>
  StyleSheet.create({
    container: {
      display: props.translation ? 'flex' : 'none',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
      padding: 8,
    },
    translationOutput: {
      width: '100%',
      height: '100%',
      padding: 8,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: '#1C7293',
      color: isInDarkMode(props.darkMode) ? '#F4F9FC' : '#4A4A4A',
      fontFamily: 'Roboto_400Regular',
    },
  });

//
