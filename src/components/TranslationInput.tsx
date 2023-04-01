import {
  ColorSchemeName,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { isInDarkMode } from '../utils/Visual';
export default function TranslationInput(props: {
  input: React.Dispatch<React.SetStateAction<string>>;
  darkMode: ColorSchemeName;
}) {
  function onChangeHandler(
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    props.input(event.nativeEvent.text);
  }

  return (
    <View style={styles(props.darkMode).container}>
      <TextInput
        style={styles(props.darkMode).translationInput}
        multiline={true}
        numberOfLines={10}
        placeholder="Greetings!"
        placeholderTextColor={props.darkMode ? '#4A4A4A' : '#D9E1E8'}
        maxLength={500}
        selectTextOnFocus={true}
        inputMode="text"
        onChange={onChangeHandler}
      ></TextInput>
    </View>
  );
}
const styles = (darkMode: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      // alignItems: 'center',
      // justifyContent: 'center',
      margin: 8,
      padding: 8,
    },
    translationInput: {
      width: '100%',
      padding: 8,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: '#1C7293',
      color: isInDarkMode(darkMode) ? '#F4F9FC' : '#4A4A4A',
      fontFamily: 'Roboto_400Regular',
    },
  });
