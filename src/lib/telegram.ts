import WebApp from '@twa-dev/sdk';

export const initTelegram = () => {
  WebApp.ready();
  WebApp.expand();
  WebApp.setHeaderColor('#0a0a0a');
};

export const getUser = () => WebApp.initDataUnsafe.user;

export const getStartParam = () => {
  // Preferred way: from initDataUnsafe
  if (WebApp.initDataUnsafe.start_param) {
    return WebApp.initDataUnsafe.start_param;
  }
  // Fallback to URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('tgWebAppStartParam') || urlParams.get('startapp');
};