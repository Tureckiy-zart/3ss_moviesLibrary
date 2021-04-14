export const getDate = (date) => {
  if (date) return date.split("-").reverse().join("/");
};
