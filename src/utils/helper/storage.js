export const saveAuthStorage = (auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};

export const getAuthStorage = () => {
  const auth = localStorage.getItem("auth");
  return auth && JSON.parse(auth);
};

export const removeAuthStorage = () => {
  localStorage.removeItem("auth");
};
