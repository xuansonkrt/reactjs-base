import axios from 'axios';

import { TranslatorContext, Storage } from 'react-jhipster';

export const ACTION_TYPES = {
  SET_LOCALE: 'locale/SET_LOCALE'
};

const initialState = {
  currentLocale: undefined
};

export type LocaleState = Readonly<typeof initialState>;

export default (state: LocaleState = initialState, action): LocaleState => {
  if (action.type === ACTION_TYPES.SET_LOCALE) {
    const currentLocale = action.locale;
    if (state.currentLocale !== currentLocale) {
      TranslatorContext.setLocale(currentLocale);
    }
    return {
      currentLocale
    };
  } else {
    return state;
  }
};

export const setLocale = locale => async dispatch => {
  console.log('setLocale', locale)
  if (!Object.keys(TranslatorContext.context.translations).includes(locale)) {
    const response = await axios.get(`/i18n/${locale}.json?buildTimestamp=${process.env.BUILD_TIMESTAMP}`, { baseURL: '' });
    console.log('response.data', response.data)
    TranslatorContext.registerTranslations(locale, response.data);
  }
  await dispatch({
    type: ACTION_TYPES.SET_LOCALE,
    locale
  });
};
