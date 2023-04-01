import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Pressable,
  Keyboard,
  EmitterSubscription,
  Animated,
} from 'react-native';

export default function SubmitTranslation(props: { onTranslate: () => void }) {
  const [showComponent, setShowComponent] = useState(false);

  let keyboardWillShowSub: EmitterSubscription;
  let keyboardWillHideSub: EmitterSubscription;

  function keyboardWillShow(event: { duration: number }) {
    console.log('keyboard show');
    setShowComponent(true);
  }
  function keyboardWillHide(event: { duration: number }) {
    console.log('keyboard hide');
    setShowComponent(false);
  }
  useEffect(() => {
    // Component initializes
    keyboardWillShowSub = Keyboard.addListener(
      'keyboardDidShow',
      keyboardWillShow
    );
    keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      keyboardWillHide
    );
    return () => {
      // Component unmounts
      keyboardWillShowSub?.remove();
      keyboardWillHideSub?.remove();
      console.log('TranslationOutput is unmounting');
    };
  }, []);

  return (
    <View
      style={{
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        display: showComponent ? 'flex' : 'none',
      }}
    >
      <Pressable onPress={props.onTranslate}>
        <Text style={styles.submitText}>Translate</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  submitText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#F4F9FC',
    backgroundColor: '#42B0A6',
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
  },
});

// For IOS consider: https://stackoverflow.com/a/63171490/18400709
// keyboardDidShow
// keyboardDidHide
