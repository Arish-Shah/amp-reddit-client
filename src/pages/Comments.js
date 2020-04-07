import Amp, { html } from '@arish-shah/amp';
import { parse } from '../util/parse';
import { dateFormat } from '../util/date';

const Comments = Amp.component('amp-commments-page', {
  props: ['data'],
  template() {
    const postDetails = this.props.data[0];
    const commentDetails = this.props.data[1];
    const {
      title,
      author,
      ups,
      created_utc,
      domain,
      selftext_html
    } = postDetails.data.children[0].data;
    document.title = title;

    let selftext;
    if (selftext_html) {
      selftext = document.createElement('div');
      selftext.className = 'body';
      selftext.innerHTML = parse(selftext_html);
    }

    return html`
      <h1><a>${title}</a></h1>
      <small>${domain}</small>
      <p class="meta">
        ${ups} upvotes by
        <a href=${`#/user/${author}`}>${author}</a>
        ${dateFormat(created_utc)}
      </p>
      ${selftext}
    `;
  }
});

export default Comments;
