export const parse = html => {
  const text = document.createElement('textarea');
  text.innerHTML = html;
  return text.value.replace(/href="\/r\//g, 'href="#/r/');
};
