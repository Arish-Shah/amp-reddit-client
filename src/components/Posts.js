import { html } from "@arish-shah/amp";
import { dateFormat } from "../util.js";

const AllPosts = posts => html`
  <ol>
    ${posts.map(
      post =>
        html`
          <li>${Item(post)}</li>
        `
    )}
  </ol>
`;

export const Item = post => {
  post = post.data;
  let titleURL = new URL(post.url);
  titleURL =
    titleURL.hostname.indexOf("www") > -1
      ? titleURL.hostname.substring(4)
      : titleURL.hostname;

  let awards = null;
  if (+post.total_awards_received > 0) {
    let awardText = +post.total_awards_received === 1 ? "award" : "awards";
    awards = html`
      <span>|</span>
      <span>${post.total_awards_received} ${awardText}</span>
    `;
  }

  let commentURL = post.permalink;
  let index = commentURL.indexOf("/comments/");
  commentURL = commentURL.substring(index);

  let createdDate = dateFormat(post.created_utc);

  return html`
    <div id="title">
      <a href=${post.url}>${post.title}</a>
      <span id="url">(${titleURL})</span>
    </div>
    <div id="meta">
      <span>${post.ups} upvotes</span>
      <span>
        by
        <b><a href=${`#/user/${post.author}`}>${post.author}</a></b>
      </span>
      <span>${createdDate}</span>
      <span></span>
      <span>|</span>
      <span>
        <a href=${`#${commentURL}`}>
          ${post.num_comments} comments
        </a>
      </span>
      ${awards}
    </div>
  `;
};

export default AllPosts;
