export const setLocalStorage = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

export const getLocalStorage = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "");
  } catch (error) {
    console.log(error);
  }
};

export const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
