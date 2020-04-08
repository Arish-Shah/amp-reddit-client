import Amp, { html } from '@arish-shah/amp';

import { dateFormat } from '../util/date';

const UserPage = Amp.component('amp-user-page', {
  props: ['details'],
  template() {
    const {
      name,
      created_utc,
      link_karma,
      comment_karma,
      subreddit
    } = this.props.details.data;

    document.title = `${name} • amp-js Reddit Client`;
    const oldURL = `https://old.reddit.com/user/${name}`;
    const url = `https://reddit.com/user/${name}`;

    return html`
      <h1>${name}</h1>
      <p>
        ...joined
        <b> ${dateFormat(created_utc)}</b>, and has
        <b>${link_karma + comment_karma} </b>
        karma
      </p>
      <p>
        <a href=${`${url}/posts`}>posts</a>
        /
        <a href=${`${url}/comments`}>comments</a>
        /
        <a href=${`${oldURL}/gilded`}>awards</a>
      </p>
      <p>${subreddit.public_description}</p>
    `;
  }
});

export default UserPage;
