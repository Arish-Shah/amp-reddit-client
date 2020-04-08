import Amp, { html } from '@arish-shah/amp';

import { copy } from '../util/copy';
import { dateFormat } from '../util/date';
import { parse } from '../util/parse';

const Replies = Amp.component('amp-replies', {
  props: ['data'],
  template() {
    const data = this.props.data;
    const { author, body_html, created_utc } = data;

    const replyBody = document.createElement('div');
    replyBody.className = 'body';
    replyBody.innerHTML = parse(body_html);

    return html`
      <span class="meta">
        <a href=${`#/user/${author}`}>${author}</a>
        ${dateFormat(created_utc)}
      </span>
      ${replyBody}
    `;
  }
});

const Comments = Amp.component('amp-comments', {
  props: ['data'],
  components: [Replies],
  template() {
    let replies = copy(this.props.data.data.children);
    replies = replies.slice(0, replies.length - 2);

    return html`
      ${replies.map(
        reply => html`<amp-replies :data=${reply.data}></amp-replies>`
      )}
    `;
  }
});

export default Comments;
