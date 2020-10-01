import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';
import {StoreState} from '../reducers/InitiativeList';
import {CombatantEntry} from './CombatantEntry';

const renderItem = ({item}: {item: number}) => {
  return <CombatantEntry index={item} />;
};

const keyExtractor = (item: number) => item.toString();

export const CombatantList = () => {
  const numCombatants = useSelector(
    (state: StoreState) => state.combatants.length,
  );

  const activeTurn = useSelector((state: StoreState) => state.activeTurn);

  const indexOrder: Array<number> = [];

  for (let i = activeTurn; i < numCombatants; i++) {
    indexOrder.push(i);
  }
  let i = 0;
  while (i < activeTurn) {
    indexOrder.push(i);
    i++;
  }

  return (
    <FlatList
      data={indexOrder}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
