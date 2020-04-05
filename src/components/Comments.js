import { html } from '@arish-shah/amp';
import { Item } from './Posts';

const Comments = response => {
  const info = response[0].data.children[0];

  return html`
    <div id="post-title">
      ${Item(info)}
    </div>
    <div id="comments">
      ${response[1].data.children.map(comment => Comment(comment.data))}
    </div>
  `;
};

const Comment = info => {
  let replies;
  let moreText = '[—]';
  if (info.replies) {
    moreText = `[${info.replies.data.children.length}]`;
    replies = info.replies.data.children.map(reply => {
      if (reply.data.author && reply.data.body) return Comment(reply.data);
    });
  }

  return html`
    <div id="comment">
      <span>${moreText}</span>
      <b><a href=${`#/user/${info.author}`}>${info.author}</a></b>
      <span>${info.ups} upvotes</span>
      <p>${info.body}</p>
      <div id="replies">
        ${replies}
      </div>
    </div>
  `;
};

export default Comments;
