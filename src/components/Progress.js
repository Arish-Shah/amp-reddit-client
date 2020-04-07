import Amp, { html } from '@arish-shah/amp';

const Progress = Amp.component('amp-progress', {
  props: ['show'],
  template() {
    return html`
      <div class="progress-bg">
        <div class="progress"></div>
      </div>
    `;
  }
});

export default Progress;
