import { createStore } from 'redux';

export const setThemeLight = () => ({
  type: 'SET_THEME',
  payload: 'light-theme',
});

export const setThemeDark = () => ({
  type: 'SET_THEME',
  payload: 'dark-theme',
});

const initialStore = { theme: 'light-theme' };

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...store, theme: action.payload };

    default:
      return store;
  }
};

const store = createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
