import Amp, { html } from '@arish-shah/amp';

const PostItem = Amp.component('amp-post-item', {
  props: ['data'],
  template() {
    return html`<h1>Post Item</h1>`;
  }
});

const Feed = Amp.component('amp-feed-page', {
  props: ['data'],
  template() {
    console.log(this.props.data.data.children);
    return html` <h1>Hello</h1> `;
  }
});

export default Feed;
