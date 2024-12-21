import { createSlice } from '@reduxjs/toolkit';
import { storage } from './persisted/encryptedStorage';

export type ModuleType =
  | 'none'
  | 'hymms';
export type RefererType = { stack: string; screen: string; params: object }

export type AppSettings ={
    isNewDevice: boolean;
    theme:  'light' | 'dark';
    active_module: ModuleType;
    user_mode:"free" | "premeium";
    referer: RefererType;
}

export const initState: AppSettings = {
    isNewDevice: false,
    user_mode:'free',
    active_module: 'none',
    referer: {
        stack: '',
        screen: '',
        params: {},
    },
    theme: storage?.getString('apptheme')?.trim() || 'light',
};
export const appSettingsSlice = createSlice({
    name: 'appsettings',
    initialState: initState,
    reducers: {
      setReferer: (state, action) => {
        state.referer = action.payload;
      },
      systemtoggleTheme: (state,{payload}) => {
        state.theme = payload.trim() ? payload : state.theme === 'light' ? 'dark' : 'light';
      },
      setUserMode: (state,{payload}) => {
        state.user_mode = payload;
      },
      toggleTheme: (state) => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        storage.set('apptheme',state.theme);
      },
    },
  });


export const {
    toggleTheme,
    setReferer,systemtoggleTheme,setUserMode
  } = appSettingsSlice.actions;

  export default appSettingsSlice.reducer;
