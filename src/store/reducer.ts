import type { Reducer } from 'react';
import type { AuthStore } from '.';

const authReducer: Reducer<AuthStore['State'], AuthStore['Mutation']> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case 'loading':
      return { ...state, loading: true, error: undefined };
    case 'set-user':
      return {
        ...state,
        loading: false,
        error: undefined,
        user: payload,
      };
    case 'error':
      return {
        ...state,
        loading: false,
        error: payload,
        reset: { ...state.reset, loading: false },
      };
    case 'logout':
      return { ...state, loading: false, user: undefined, error: undefined };
    case 'reset-loading':
      return {
        ...state,
        error: undefined,
        reset: { ...state.reset, loading: true },
      };
    case 'set-reset-state':
      return {
        ...state,
        reset: { ...state.reset, loading: false, state: payload },
      };
    default:
      return { ...state };
  }
};

export default authReducer;
