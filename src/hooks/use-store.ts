import { Reducer, useReducer } from 'react';

export interface Mutation<T> {
  type: T;
  payload?: any;
}

type Commit<M> = (mutation: M) => void;

type Action<S, M> = ({
  commit,
  state,
}: {
  commit: (m: M) => void;
  state: S;
}) => any;

type Dispatch<S, M> = (a: Action<S, M>) => void;

export interface Store<S, T> {
  State: S;
  Mutation: Mutation<T>;
  Commit: Commit<Mutation<T>>;
  Action: Action<S, Mutation<T>>;
  Dispatch: Dispatch<S, Mutation<T>>;
  StoreProps: {
    state?: S;
    commit?: Commit<Mutation<T>>;
    dispatch?: Dispatch<S, Mutation<T>>;
  };
}

export default function useStore<S, M>(
  reducer: Reducer<S, M>,
  initialState: S
): [S, Commit<M>, Dispatch<S, M>] {
  const [state, commit] = useReducer(reducer, initialState);
  const dispatch = (action: Action<S, M>) => {
    action({ state, commit });
  };
  return [state, commit, dispatch];
}
