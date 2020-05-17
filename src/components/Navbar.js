import Amp, { html } from '@arish-shah/amp';

const Navbar = Amp.component('amp-navbar', {
  onmount() {
    let hash = window.location.hash;
    if (hash === '' || hash === '#/') hash = '#/hot';

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },
  template() {
    return html`
      <nav>
        <div class="icon">&</div>
        <ul>
          <li><a href="#/hot">hot</a></li>
          <li><a href="#/new">new</a></li>
          <li><a href="#/top">top</a></li>
          <li><a href="#/r/pics">pics</a></li>
          <li><a href="#/r/askreddit">ask</a></li>
          <li class="about"><a href="#/about">about</a></li>
        </ul>
      </nav>
    `;
  }
});

export default Navbar;
