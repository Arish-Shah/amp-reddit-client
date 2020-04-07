import Amp, { html } from '@arish-shah/amp';

const Error = Amp.component('amp-error', {
  props: ['error', 'message'],
  template() {
    return html`
      <h1>${this.props.error.error}</h1>
      <p>${this.props.error.message}</p>
    `;
  }
});

export default Error;
