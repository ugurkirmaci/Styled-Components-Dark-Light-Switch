import React, { useReducer } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { light, dark } from './themes';
import Context from "./context";
import reducer from './reducer';
import Switch from './Switch';
import Content from './Content';

export const GlobalStyles = createGlobalStyle`
  body, #root { 
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
`;

export default function App() {
  const [state,  dispatch] = useReducer(reducer, {
    isDark: false
  });

  return (
    <Context.Provider value={{ state,dispatch }}>
      <ThemeProvider 
      theme={state.isDark ? dark : light}>
          <>
            <GlobalStyles/>
            <Switch/>
            <Content/>
          </>
      </ThemeProvider>
    </Context.Provider>
  )
}