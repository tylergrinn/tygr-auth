import useStore, { Store } from '../hooks/use-store';
import * as actions from './actions';
import type { Mutation } from './mutation';
import authReducer from './reducer';
import AuthState, { initialState } from './state';

export { actions };

export type AuthStore = Store<AuthState, Mutation>;

export default function useAuthStore() {
  return useStore(authReducer, initialState);
}
