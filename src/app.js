import { render } from "@arish-shah/amp";

import Posts from "./components/Posts.js";
import Comments from "./components/Comments.js";
import User from "./components/User.js";
import { Error, Loading } from "./components/Display.js";

const root = document.getElementById("root");

const hashChangeHandler = () => {
  render(Loading, root);
  const hash = window.location.hash.slice(2);

  if (hash === "") {
    getPosts("hot");
  } else if (hash.indexOf("comments") > -1) {
    getComments(hash);
  } else if (hash.indexOf("user") > -1) {
    getUser(hash);
  } else {
    getPosts(`r/${hash}`);
  }
};

const getPosts = async name => {
  try {
    let response = localStorage.getItem(name);
    if (response) {
      response = JSON.parse(response);
    } else {
      response = await fetch(`https://www.reddit.com/${name}.json`);
      response = await response.json();
      localStorage.setItem(name, JSON.stringify(response));
    }
    render(Posts(response.data.children), root);
  } catch (e) {
    render(Error(e), root);
  }
};

const getComments = async hash => {
  try {
    let response = await fetch(`https://www.reddit.com/${hash}.json`);
    response = await response.json();
    render(Comments(response), root);
  } catch (e) {
    render(Error(e), root);
  }
};

const getUser = async hash => {
  try {
    let response = await fetch(`https://www.reddit.com/${hash}/about.json`);
    response = await response.json();
    render(User(response.data), root);
  } catch (e) {
    render(Error(e), root);
  }
};

window.addEventListener("hashchange", hashChangeHandler);
window.addEventListener("load", hashChangeHandler);
document.getElementById("refresh").addEventListener("click", () => {
  localStorage.clear();
  hashChangeHandler();
});
document.getElementById("home").addEventListener("click", () => {
  window.location.hash = "#/";
  hashChangeHandler();
});
