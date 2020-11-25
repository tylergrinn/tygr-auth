interface User {
  email: string;
  id: string;
  provider: 'local' | 'google' | 'twitter' | 'github';
  [key: string]: any;
}

export default interface AuthState {
  loading: boolean;
  error?: string;
  user?: User;
  reset: {
    loading: boolean;
    state: 'initial' | 'verify' | 'password' | 'success';
  };
}

export const initialState: AuthState = {
  loading: false,
  reset: { loading: false, state: 'initial' },
};
