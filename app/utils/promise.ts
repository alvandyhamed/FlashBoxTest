export const unifyPromise = async (method, ...args) => {
  try {
    return [true, await method(...args)];
  } catch (e) {
    return [false, e];
  }
};
