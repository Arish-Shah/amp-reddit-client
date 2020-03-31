export const getData = async url => {
  let response = localStorage.getItem(url);

  if (!response) {
    response = await fetch(url);
    response = await response.json();
    localStorage.setItem(url, JSON.stringify(response));
    return response;
  }

  return JSON.parse(response);
};
