export const getData = async url => {
  let response = await fetch(url);
  response = await response.json();
  return response;
};

export const getURL = passedHash => {
  const reddit = 'https://www.reddit.com';
  const hash = passedHash || window.location.hash.slice(2);

  if (hash.indexOf('user/') > -1) {
    return `${reddit}/${hash}/about.json`;
  } else {
    return `${reddit}/${hash}.json`;
  }
};
