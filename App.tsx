import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Colors} from './src/Colors';
import {createStore} from 'redux';
import {initiativeListReducer} from './src/reducers/InitiativeList';
import {Provider} from 'react-redux';
import {CombatantList} from './src/components/CombatantList';
import {Header} from './src/components/Header';
import {Footer} from './src/components/Footer';

const store = createStore(initiativeListReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <CombatantList />
        <Footer />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.backGround,
    flex: 1,
  },
});

export default App;
