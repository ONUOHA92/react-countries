export const getLocalStorage = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data) as T;
  }

  return null;
};

export const setLocalStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};
