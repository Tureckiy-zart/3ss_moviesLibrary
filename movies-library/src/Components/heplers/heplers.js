export const getDate = (date) => {
  if (date) return date.split("-").reverse().join("/");
};

export const getAvatar = (avatar_path) => {
  const pathToAvatar = "/https://secure.gravatar.com/avatar",
    defaultAvatar =
      "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg";
  let avatarPathTrimmed = `https://image.tmdb.org/t/p/w154${avatar_path}`;
  if (avatar_path === null) avatarPathTrimmed = defaultAvatar;
  if (avatar_path && avatar_path.indexOf(pathToAvatar) !== -1)
    avatarPathTrimmed = avatar_path.slice(1);
  return avatarPathTrimmed;
};

export const trimmedString = (string) => {
  if (string.length > 165) return string.substring(0, 150) + `...Read more`;
  return string;
};

