import Raven from 'raven-js';

const sentry_key = '6bd0933ceb684d6bb6970720b7a4c96e';
const sentry_app = '223715';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context,
    git_commit: 'some commit hash',
    userLevel: 'editor'
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
