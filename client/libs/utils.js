export const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);
export const convertVueToNormal = obj => JSON.parse(JSON.stringify(obj));
