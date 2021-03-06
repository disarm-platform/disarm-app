import BUILD_TIME from 'config/build-time'
import {register} from 'lib/helpers/register_service_worker'

if (BUILD_TIME.DOUMA_PRODUCTION_MODE) {
  register('/service-worker.js', {
    ready() {
      console.log('[sw] Service worker is active.');
    },
    cached() {
      document.dispatchEvent(new Event('show-content-available-offline'))
      console.log('[sw] Content has been cached for offline use.');
    },
    updatefound() {
      document.dispatchEvent(new Event('show-update-downloading'))
      console.log('[sw] New content downloading')
    },
    updated() {
      document.dispatchEvent(new Event('show-update-available'))
      console.log('[sw] New content is available; please refresh.');
    },
    offline() {
      console.log('[sw] No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('[sw] Error during service worker registration:', error);
    }
  });
} else {
  console.warn('DOUMA ServiceWorker disabled in development')
}

