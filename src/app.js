import { render } from '@arish-shah/amp';

import Posts from './components/Posts';
import Comments from './components/Comments';
import User from './components/User';
import About from './components/About';
import { Error, Loading } from './components/Display';
import { getData } from './util/cache';

const root = document.getElementById('root');

const hashChangeHandler = () => {
  render(Loading, root);
  const hash = window.location.hash.slice(2);

  if (hash === '') {
    getPosts('hot');
  } else if (hash.indexOf('comments') > -1) {
    getComments(hash);
  } else if (hash.indexOf('user') > -1) {
    getUser(hash);
  } else if (hash.indexOf('about') > -1) {
    render(About, root);
  } else {
    getPosts(`r/${hash}`);
  }
};

const getPosts = async name => {
  try {
    let response = await getData(`https://www.reddit.com/${name}.json`);
    render(Posts(response.data.children), root);
  } catch (e) {
    render(Error(e), root);
  }
};

const getComments = async hash => {
  try {
    let response = await getData(`https://www.reddit.com/${hash}.json`);
    render(Comments(response), root);
  } catch (e) {
    render(Error(e), root);
  }
};

const getUser = async hash => {
  try {
    let response = await getData(`https://www.reddit.com/${hash}/about.json`);
    render(User(response.data), root);
  } catch (e) {
    render(Error(e), root);
  }
};

window.addEventListener('hashchange', hashChangeHandler);
window.addEventListener('load', hashChangeHandler);
document.getElementById('refresh').addEventListener('click', () => {
  localStorage.clear();
  hashChangeHandler();
});
document.getElementById('home').addEventListener('click', () => {
  window.location.hash = '#/';
  hashChangeHandler();
});
