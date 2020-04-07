import Amp, { html } from '@arish-shah/amp';

import Feed from './pages/Feed';
import About from './pages/About';
import User from './pages/User';
import Comments from './pages/Comments';

import Navbar from './components/Navbar';
import Progress from './components/Progress';
import { getURL, getData } from './util/getData';

const Root = Amp.component('amp-root', {
  data: {
    cache: {},
    error: null,
    current: {
      loading: true,
      hash: '',
      data: null
    }
  },
  methods: {
    onmount() {
      window.addEventListener('load', this.router);
      window.addEventListener('hashchange', this.router);
    },
    router() {
      let hash = window.location.hash;
      if (hash.indexOf('/about') > -1) {
        this.current = {
          hash,
          data: {},
          loading: false
        };
      } else {
        this.updateCache(getURL());
      }
    },
    updateCache(url) {
      if (!this.cache[url]) {
        this.current.loading = true;
        getData(url)
          .then(response => {
            this.cache[url] = response;
            this.current = {
              hash: window.location.hash,
              loading: false,
              data: this.cache[url]
            };
          })
          .catch(error => console.log(error));
      } else {
        this.current = {
          hash: window.location.hash,
          loading: false,
          data: this.cache[url]
        };
      }
    },
    getPage() {
      if (this.current.data) {
        const hash = this.current.hash;
        const progress = this.current.loading
          ? html`<amp-progress></amp-progress>`
          : null;

        if (hash.indexOf('/user/') > -1) {
          return html`
            ${progress}
            <amp-user-page .details=${this.current.data}></amp-user-page>
          `;
        } else if (hash.indexOf('/comments/') > -1) {
          return html`
            ${progress}
            <amp-commments-page .data=${this.current.data}></amp-commments-page>
          `;
        } else if (hash.indexOf('/about') > -1) {
          return html`
            ${progress}
            <amp-about-page></amp-about-page>
          `;
        } else {
          return html`
            ${progress}
            <amp-feed-page .data=${this.current.data}></amp-feed-page>
          `;
        }
      } else {
        return html`<amp-progress></amp-progress>`;
      }
    }
  },
  components: [Navbar, Progress, Feed, Comments, About, User],
  template() {
    document.title = 'amp-js Reddit Client';

    return html`
      <amp-navbar></amp-navbar>
      <main class="page">
        ${this.getPage()}
      </main>
    `;
  }
});

Root.generate();
