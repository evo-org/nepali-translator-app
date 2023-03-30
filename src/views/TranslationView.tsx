import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TranslationDirection from '../components/TranslationDirection';
import TranslationInput from '../components/TranslationInput';
import TranslationOutput from '../components/TranslationOutput';

export default function TranslationView() {
  // const [courseGoals, setCourseGoals] = useState([]);

  // function startAddGoalHandler() {
  //   setModalIsVisible(true);
  // }

  // function endAddGoalHandler() {
  //   setModalIsVisible(false);
  // }

  // function addGoalHandler(enteredGoalText) {
  //   setCourseGoals((currentCourseGoals) => [
  //     ...currentCourseGoals,
  //     { text: enteredGoalText, id: Math.random().toString() },
  //   ]);
  //   endAddGoalHandler();
  // }

  // function deleteGoalHandler(id) {
  //   setCourseGoals((currentCourseGoals) => {
  //     return currentCourseGoals.filter((goal) => goal.id !== id);
  //   });
  // }

  return (
    <View style={styles.appContainer}>
      <TranslationDirection />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
