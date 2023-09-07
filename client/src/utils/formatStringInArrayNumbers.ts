export const formatStringInArrayNumbers = (str: string) => {
  const strArray = str.split(' ');
  const result = strArray.map(item => parseInt(item));
  return {result}
};
