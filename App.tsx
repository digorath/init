import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {Colors} from './src/Colors';
import {Button} from './src/components/Button';
import {createStore} from 'redux';
import {initiativeListReducer} from './src/reducers/InitiativeList';
import {Provider} from 'react-redux';
import {createAddAction, createNextAction} from './src/actions/ActionCreators';
import {CombatantList} from './src/components/CombatantList';
import {Header} from './src/components/Header';

const store = createStore(initiativeListReducer);

const onPressNew = () => store.dispatch(createAddAction());
const onPressNext = () => store.dispatch(createNextAction());

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <CombatantList />
        <View style={styles.footer}>
          <Button onPress={onPressNew} label="New" />
          <Button onPress={onPressNext} label="Next" />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: Colors.surface,
  },
  safeAreaView: {
    backgroundColor: Colors.backGround,
    flex: 1,
  },
});

export default App;
