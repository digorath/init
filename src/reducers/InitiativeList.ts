import {ActionType, InitiativeAction} from '../actions/ActionTypes';

export type Combatant = {name: string; initiative: number};

const DEFAULT_INITIATIVE = 10;

const INITIAL_STATE: {activeTurn: number; combatants: Array<Combatant>} = {
  activeTurn: 0,
  combatants: [
    {name: 'Combatant 1', initiative: DEFAULT_INITIATIVE},
    {name: 'Combatant 2', initiative: DEFAULT_INITIATIVE},
  ],
};

export type StoreState = typeof INITIAL_STATE;

// always use topmost initiative number of the displayed list.
const getNewInitiative = ({combatants, activeTurn}: StoreState) => {
  const numCombatants = combatants.length;
  if (numCombatants === 0) {
    return DEFAULT_INITIATIVE;
  } else {
    return combatants[activeTurn].initiative;
  }
};

// always add new combatant at the top of the displayed list.
const addNewCombatant = (
  {combatants, activeTurn}: StoreState,
  newCombatant: Combatant,
) => {
  if (activeTurn === 0) {
    const newCombatants = [...combatants];
    newCombatants.unshift(newCombatant);
    return {activeTurn, combatants: newCombatants};
  }

  const start = combatants.slice(0, activeTurn);
  start.push(newCombatant);
  const end = combatants.slice(activeTurn, combatants.length);
  return {activeTurn, combatants: start.concat(end)};
};

const deleteCombatantAtIndex = (
  index: number,
  combatants: Array<Combatant>,
) => {
  return combatants
    .slice(0, index)
    .concat(combatants.slice(index + 1, combatants.length));
};

export const initiativeListReducer = (
  state = INITIAL_STATE,
  action: InitiativeAction,
): StoreState => {
  switch (action.type) {
    case ActionType.Add: {
      const newCombatant = {
        name: 'Combatant ' + (state.combatants.length + 1).toString(),
        initiative: getNewInitiative(state),
      };

      if (state.combatants.length === 0) {
        return {combatants: [newCombatant], activeTurn: 0};
      }
      return addNewCombatant(state, newCombatant);
    }
    case ActionType.Delete: {
      const {index} = action.payload;
      let newActiveTurn = state.activeTurn;
      if (index === state.activeTurn) {
        newActiveTurn = (state.activeTurn + 1) % state.combatants.length;
      }
      const newCombatants = deleteCombatantAtIndex(index, state.combatants);
      return {activeTurn: newActiveTurn, combatants: newCombatants};
    }
    case ActionType.Next: {
      return {
        ...state,
        activeTurn: (state.activeTurn + 1) % state.combatants.length,
      };
    }
    case ActionType.Reset: {
      return {
        activeTurn: 0,
        combatants: [
          {name: 'Combatant 1', initiative: DEFAULT_INITIATIVE},
          {name: 'Combatant 2', initiative: DEFAULT_INITIATIVE},
        ],
      };
    }
    case ActionType.Update: {
      const {index, name, initiative} = action.payload;
      const newState = {...state};
      newState.combatants[index] = {name, initiative};
      newState.combatants.sort((a, b) => -a.initiative + b.initiative);
      return newState;
    }
    default:
      return state;
  }
};
