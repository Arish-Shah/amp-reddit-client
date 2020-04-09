import Amp, { html } from '@arish-shah/amp';

const Progress = Amp.component('amp-progress', {
  props: ['show'],
  template() {
    return html`<div class="progress"></div>`;
  }
});

export default Progress;
