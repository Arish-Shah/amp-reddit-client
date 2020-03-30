import { html } from "@arish-shah/amp";

export const Loading = html`
  <div id="loader">Loading...</div>
`;

export const Error = error => html`
  <div id="loading">${error}</div>
`;
