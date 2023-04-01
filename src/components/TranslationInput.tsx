import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
export default function TranslationInput(props: {
  input: React.Dispatch<React.SetStateAction<string>>;
}) {
  function onChangeHandler(
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    props.input(event.nativeEvent.text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.translationInput}
        multiline={true}
        numberOfLines={10}
        placeholder="Greetings!"
        placeholderTextColor="#D9E1E8"
        maxLength={500}
        selectTextOnFocus={true}
        inputMode="text"
        onChange={onChangeHandler}
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
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
    color: '#4A4A4A',
    fontFamily: 'Roboto_400Regular',
  },
});
