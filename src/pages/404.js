import Amp, { html } from '@arish-shah/amp';

const FourZeroFour = Amp.component('amp-404-page', {
  template() {
    document.title = '404';

    return html`
      <h1>404</h1>
      <p>Page Not Found.</p>
    `;
  }
});

export default FourZeroFour;
