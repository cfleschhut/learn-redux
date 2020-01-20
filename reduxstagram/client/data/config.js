import Raven from 'raven-js';

const sentry_key = 'c532cd2d2ee541af8269649ecb39a955';
const sentry_app = '85142';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
