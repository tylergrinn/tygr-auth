import type { AuthStore } from '..';
import http from './http';

type Action = AuthStore['Action'];

const init: Action = async ({ commit }) => {
  commit({ type: 'loading' });

  try {
    const user = await http.get('/verify');
    commit({ type: 'set-user', payload: user });
  } catch (err) {
    commit({ type: 'logout' });
  }
};

export default init;
