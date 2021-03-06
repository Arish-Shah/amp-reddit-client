import Amp, { html } from '@arish-shah/amp';

const AboutPage = Amp.component('amp-about-page', {
  template() {
    document.title = 'About • amp-js Reddit Client';

    return html`
      <h1>About this site</h1>
      <p>
        This is a simple Reddit client app, built with components created using
        <a href="https://npmjs.com/@arish-shah/amp">amp-js</a>.
      </p>
      <p>
        amp-js makes use of HTML templates to create user interfaces. These
        templates are generated by tagging the ES6 template literal. The static
        and dynamic part of the templates are separated allowing creation of
        reactive applications easier. You can read more about the desing and
        philosophy in the
        <a href="https://github.com/Arish-Shah/amp-js">github repo</a>.
      </p>
      <p>
        We're using <a href="https://www.reddit.com/dev/api/">Reddit API</a> as
        a backend. The app is hosted on
        <a href="https://www.netlify.com/">Netlify</a>. The souce code is
        <a href="https://github.com/Arish-Shah/amp-reddit-client">here</a>.
      </p>
    `;
  }
});

export default AboutPage;
