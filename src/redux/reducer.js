import { createStore } from 'redux';

export const setThemeLight = () => ({ type: 'SET_THEME', payload: 'LIGHT' });

export const setThemeDark = () => ({ type: 'SET_THEME', payload: 'DARK' });

const initialStore = { theme: 'LIGHT' };

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...store, theme: action.payload };

    default:
      return store;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
