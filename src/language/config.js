import messagesEn from './translations/en.json';
import messagesVi from './translations/vi.json';

export const CACHE_LANGUAGE = 'lang';
export const DEFAULT_LANGUAGE = 'en';

export const languages = {
  en: messagesEn,
  vi: messagesVi,
};

export const OPTIONS_LANG = [
  { id: 'en', label: 'English', image: '/images/flags/en.png' },
  {
    id: 'vi',
    label: 'Tiếng việt',
    image: '/images/flags/vn.png',
  },
];
