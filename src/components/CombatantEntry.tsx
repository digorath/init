import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  createDeleteAction,
  createUpdateAction,
} from '../actions/ActionCreators';
import {Colors} from '../Colors';

import {StoreState} from '../reducers/InitiativeList';

type Props = {index: number};

export const CombatantEntry = ({index}: Props) => {
  const dispatch = useDispatch();
  const combatantSelector = useCallback(
    (state: StoreState) => state.combatants[index],
    [index],
  );
  const combatant = useSelector(combatantSelector);

  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(0);

  useEffect(() => {
    setInitiative(combatant.initiative);
    setName(combatant.name);
  }, [combatant]);

  const onSubmit = useCallback(() => {
    dispatch(createUpdateAction(index, name, initiative));
  }, [index, name, initiative, dispatch]);

  const onChangeInit = (numString: string) => {
    setInitiative(+numString);
  };

  const onEndEditing = useCallback(() => {
    setName(combatant.name);
    setInitiative(combatant.initiative);
  }, [combatant]);

  const onPressDelete = useCallback(() => {
    dispatch(createDeleteAction(index));
  }, [index, dispatch]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.name}
        value={name}
        onChangeText={setName}
        onSubmitEditing={onSubmit}
        placeholder={combatant.name}
        onEndEditing={onEndEditing}
      />
      <TextInput
        style={styles.init}
        value={initiative.toString()}
        onChangeText={onChangeInit}
        onSubmitEditing={onSubmit}
        keyboardType="number-pad"
        placeholder={combatant.initiative.toString()}
        onEndEditing={onEndEditing}
      />
      <TouchableOpacity style={styles.deleteContainer} onPress={onPressDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delete: {
    color: 'red',
    fontSize: 32,
    padding: 8,
  },
  deleteContainer: {
    margin: 4,
    justifyContent: 'center',
  },
  init: {
    color: Colors.text,
    fontSize: 32,
  },
  name: {
    color: Colors.text,
    fontSize: 32,
    marginHorizontal: 8,
    width: '60%',
  },
});
