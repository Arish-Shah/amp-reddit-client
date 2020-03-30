import { html } from "@arish-shah/amp";
import { actualDate } from "../util.js";

const User = info => {
  const [actual, relative] = actualDate(info.created_utc);
  return html`
    <div id="user">
      <div class="img-wrapper">
        <img src=${info.icon_img} alt="Not Found" />
      </div>
      <div id="details">
        <div id="name">
          <b>${info.name}</b>
        </div>
        <dl>
          <dt>Joined</dt>
          <dd>${relative} (${actual})</dd>
        </dl>
        <dl>
          <dt>Karma</dt>
          <dd>
            Comment: ${info.comment_karma} <br />
            Link: ${info.link_karma}
          </dd>
        </dl>
      </div>
    </div>
  `;
};

export default User;
