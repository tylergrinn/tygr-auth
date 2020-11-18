export const login = async (email: string, password: string) => {
  console.log('Logging in', email, password);
};

export const register = async (email: string, password: string) => {
  console.log('Registering', email, password);
};

export const resetPassword = async (email: string) => {
  console.log('Resetting password', email);
};

export const google = async () => {
  console.log('Signing in with google');
};

export const github = async () => {
  console.log('Signing in with github');
};

export const twitter = async () => {
  console.log('Signing in with twitter');
};
