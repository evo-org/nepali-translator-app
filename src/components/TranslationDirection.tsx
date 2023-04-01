import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import SupportedLanguage from '../constants/SupportedLanguage';

export default function TranslationDirection(props: {
  onLanguageSwitch: () => void;
  inputLanguage: SupportedLanguage;
  outputLanguage: SupportedLanguage;
}) {
  return (
    <Pressable onPressOut={props.onLanguageSwitch}>
      <View style={styles.container}>
        <Text style={styles.inputText}>{props.inputLanguage}</Text>
        <AntDesign
          name="retweet"
          size={24}
          color="#1C7293"
        />
        <Text style={styles.outputText}>{props.outputLanguage}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    //   borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    flex: 1,
    textAlign: 'center',
    color: '#0A3D62',
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
  },
  outputText: {
    flex: 1,
    textAlign: 'center',
    color: '#0A3D62',
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
  },
});

//
