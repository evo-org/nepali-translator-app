import { useState } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';

import TranslationDirection from '../components/TranslationDirection';
import TranslationInput from '../components/TranslationInput';
import TranslationOutput from '../components/TranslationOutput';
import SubmitTranslation from '../components/SubmitTranslation';
import SupportedLanguage from '../constants/SupportedLanguage';

export default function TranslationView() {
  const [inputLanguage, setInputLanguage] = useState(SupportedLanguage.English);
  const [outputLanguage, setOutputLanguage] = useState(
    SupportedLanguage.Nepali
  );

  const [translationInput, setTranslationInput] = useState('');
  const [translationOutput, setTranslationOutput] = useState('');

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
    <View style={styles.appContainer}>
      <TranslationDirection
        inputLanguage={inputLanguage}
        outputLanguage={outputLanguage}
        onLanguageSwitch={languageSwitchHandler}
      />
      <TranslationInput input={setTranslationInput} />
      <TranslationOutput translation={translationOutput} />
      <SubmitTranslation onTranslate={translationHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
