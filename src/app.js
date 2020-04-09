import Amp, { html } from '@arish-shah/amp';

import FeedPage from './pages/Feed';
import AboutPage from './pages/About';
import UserPage from './pages/User';
import CommentsPage from './pages/Comments';

import Navbar from './components/Navbar';
import Progress from './components/Progress';
import { getURL, getData } from './util/getData';

const Root = Amp.component('amp-root', {
  onmount() {
    window.addEventListener('load', this.router);
    window.addEventListener('hashchange', this.router);
  },
  data: {
    cache: {},
    current: null
  },
  methods: {
    router() {
      const hash = window.location.hash;

      if (hash.indexOf('/about') > -1) {
        this.current = 'about';
        this.hideLoading();
        return;
      }
      this.updateCache(getURL(hash));
    },
    updateCache(url) {
      if (!this.cache[url]) {
        this.showLoading();
        fetch(url)
          .then(response => response.json())
          .then(response => {
            this.cache[url] = response;
            this.current = this.cache[url];
          })
          .catch(error => console.log(error))
          .finally(() => this.hideLoading());
      } else {
        this.current = this.cache[url];
        this.hideLoading();
      }
    },
    getPage() {
      if (this.current === 'about') {
        return html`<amp-about-page></amp-about-page>`;
      }
      if (this.current) {
        const hash = window.location.hash;

        if (hash.indexOf('/user/') > -1) {
          return html`<amp-user-page
            :data=${this.current.data}
          ></amp-user-page>`;
        }
        if (hash.indexOf('/comments/') > -1) {
          return html`<amp-commments-page
            :data=${this.current}
          ></amp-comments-page>`;
        }
        return html`<amp-feed-page :data=${this.current}></amp-feed-page>`;
      }
    },
    showLoading() {
      const progress = document.querySelector('amp-progress');
      progress.style.display = 'block';
    },
    hideLoading() {
      const progress = document.querySelector('amp-progress');
      progress.style.display = 'none';
    }
  },
  components: [Navbar, Progress, FeedPage, CommentsPage, AboutPage, UserPage],
  template() {
    document.title = 'amp-js Reddit Client';

    return html`
      <amp-progress></amp-progress>
      <amp-navbar></amp-navbar>
      <main class="page">
        ${this.getPage()}
      </main>
    `;
  }
});

Root.generate();
