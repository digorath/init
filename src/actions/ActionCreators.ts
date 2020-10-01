import {
  ActionType,
  AddAction,
  DeleteAction,
  NextAction,
  UpdateAction,
} from './ActionTypes';

export const createAddAction = (): AddAction => ({type: ActionType.Add});

export const createDeleteAction = (index: number): DeleteAction => ({
  type: ActionType.Delete,
  payload: {index},
});

export const createNextAction = (): NextAction => ({type: ActionType.Next});

export const createUpdateAction = (
  index: number,
  name: string,
  initiative: number,
): UpdateAction => ({
  type: ActionType.Update,
  payload: {index, name, initiative},
});
