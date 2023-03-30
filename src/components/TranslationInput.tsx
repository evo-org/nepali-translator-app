import { useState } from 'react';
import { StyleSheet, Text, Button, View, Pressable } from 'react-native';
export default function TranslationInput() {
  const [inputLanguage, setInputLanguage] = useState('English');
  const [outputLanguage, setOutputLanguage] = useState('Nepali');

  return (
    <Pressable>
      <View style={styles.goalItem}>
        <Text>{inputLanguage}</Text>
        <Button
          title="Add Goal"
          color="#b180f0"
        />
        <Text>{outputLanguage}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
});

//
