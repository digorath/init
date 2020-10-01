export enum ActionType {
  Add,
  Delete,
  Next,
  Update,
}

export type AddAction = {
  type: ActionType.Add;
};

export type DeleteAction = {
  type: ActionType.Delete;
  payload: {index: number};
};

export type NextAction = {
  type: ActionType.Next;
};

export type UpdateAction = {
  type: ActionType.Update;
  payload: {
    index: number;
    name: string;
    initiative: number;
  };
};

export type InitiativeAction =
  | AddAction
  | DeleteAction
  | NextAction
  | UpdateAction;
