import Amp, { html } from '@arish-shah/amp';

const Error = Amp.component('amp-error', {
  template() {
    return html`
      <h1>404</h1>
      <p>Not Found</p>
    `;
  }
});

export default Error;
