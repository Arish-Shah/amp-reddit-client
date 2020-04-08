import Amp, { html } from '@arish-shah/amp';

import { dateFormat } from '../util/date';

const PostItem = Amp.component('amp-post-item', {
  props: ['post', 'index'],
  template() {
    const {
      title,
      ups,
      author,
      created_utc,
      num_comments,
      url,
      permalink,
      domain
    } = this.props.post;
    return html`
      <h2><a href=${url}>${title}</a> <small>(${domain})</small></h2>
      <p class="meta">
        ${ups} upvotes by
        <a href=${`#/user/${author}`}>${author}</a>
        ${dateFormat(created_utc)} |
        <a href=${`#${permalink}`}>${num_comments} comments</a>
      </p>
      <span class="index">${this.props.index + 1}</span>
    `;
  }
});

const FeedPage = Amp.component('amp-feed-page', {
  props: ['data'],
  components: [PostItem],
  template() {
    const posts = this.props.data.data.children;
    return html`
      ${posts.map(
        (post, index) =>
          html`<amp-post-item
            .index=${index}
            .post=${post.data}
          ></amp-post-item>`
      )}
    `;
  }
});

export default FeedPage;
