import WebApp from '@twa-dev/sdk';

export const initTelegram = () => {
  WebApp.ready();
  WebApp.expand();
  WebApp.setHeaderColor('#0a0a0a');
};

export const getUser = () => WebApp.initDataUnsafe.user;
export const getStartParam = () => {
  return WebApp.startParam || new URLSearchParams(window.location.search).get('tgWebAppStartParam');
};

export const notifyUpline = (message: string) => {
  // Backend will handle actual Telegram notification
  console.log('Notify upline:', message);
};