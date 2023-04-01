import { useState } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  Appearance,
  ColorSchemeName,
  useColorScheme,
} from 'react-native';

import TranslationDirection from '../components/TranslationDirection';
import TranslationInput from '../components/TranslationInput';
import TranslationOutput from '../components/TranslationOutput';
import SubmitTranslation from '../components/SubmitTranslation';
import SupportedLanguage from '../constants/SupportedLanguage';
import DarkMode from '../components/DarkMode';
import { isInDarkMode } from '../utils/Visual';

export default function TranslationView() {
  const [inputLanguage, setInputLanguage] = useState(SupportedLanguage.English);
  const [outputLanguage, setOutputLanguage] = useState(
    SupportedLanguage.Nepali
  );

  const [translationInput, setTranslationInput] = useState('');
  const [translationOutput, setTranslationOutput] = useState('');

  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const [darkMode, setDarkMode] = useState(colorScheme);

  function languageSwitchHandler() {
    if (inputLanguage === SupportedLanguage.English) {
      setInputLanguage(SupportedLanguage.Nepali);
      setOutputLanguage(SupportedLanguage.English);
    } else {
      setInputLanguage(SupportedLanguage.English);
      setOutputLanguage(SupportedLanguage.Nepali);
    }
  }

  function translationHandler() {
    Keyboard.dismiss();
    setTranslationOutput('Generating translation ...');

    console.log('Translating ...');
    console.log(translationInput);

    // Actual translation
    // setTranslationOutput('asd');
  }

  return (
    <View style={styles(darkMode).appContainer}>
      <DarkMode
        darkMode={darkMode}
        onChange={setDarkMode}
      />
      <TranslationDirection
        inputLanguage={inputLanguage}
        outputLanguage={outputLanguage}
        onLanguageSwitch={languageSwitchHandler}
      />
      <TranslationInput
        darkMode={darkMode}
        input={setTranslationInput}
      />
      <TranslationOutput
        darkMode={darkMode}
        translation={translationOutput}
      />
      <SubmitTranslation onTranslate={translationHandler} />
    </View>
  );
}

const styles = (darkMode: ColorSchemeName) =>
  StyleSheet.create({
    appContainer: {
      backgroundColor: isInDarkMode(darkMode) ? '#1C1C1E' : '#F4F9FC',
      flex: 1,
      paddingTop: 50,
      paddingBottom: 50,
      paddingHorizontal: 16,
    },
    goalsContainer: {
      flex: 5,
    },
  });
