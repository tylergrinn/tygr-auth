export const login = (email: string, password: string) => {
  console.log('Logging in', email, password);
};

export const register = (email: string, password: string) => {
  console.log('Registering', email, password);
};

export const resetPassword = (email: string) => {
  console.log('Resetting password', email);
};

export const google = () => {
  console.log('Signing in with google');
};

export const github = () => {
  console.log('Signing in with github');
};

export const twitter = () => {
  console.log('Signing in with twitter');
};
