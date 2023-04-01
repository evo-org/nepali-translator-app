import { useState } from 'react';
import { StyleSheet, Text, Button, View, Pressable } from 'react-native';

var showComponent: 'none' | 'flex' = 'none';

export default function TranslationOutput(props: { translation: string }) {
  const [inputLanguage, setInputLanguage] = useState('English');
  const [outputLanguage, setOutputLanguage] = useState('Nepali');

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
const styles = (props: { translation: string }) =>
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
      color: '#4A4A4A',
      fontFamily: 'Roboto_400Regular',
    },
  });

//
