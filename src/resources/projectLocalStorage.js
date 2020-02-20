export const projectLocalStorage = {
  save(key, jsonData, expirationMin) {
    const expirationMS = expirationMin * 60 * 1000;
    const record = {
      value: JSON.stringify(jsonData),
      timestamp: new Date().getTime() + expirationMS,
    };
    window.localStorage.setItem(key, JSON.stringify(record));
    return jsonData;
  },
  load(key) {
    const record = JSON.parse(window.localStorage.getItem(key));
    if (!record) {
      return false;
    }
    return new Date().getTime() < record.timestamp && JSON.parse(record.value);
  },
  delete(key) {
    window.localStorage.removeItem(key);
  },
};
