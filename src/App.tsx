import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CalculatorContextProvider } from './contexts/CalculatorContext';
import { AuthContextProvider } from './contexts/AuthContext';

export const App = () => {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AuthContextProvider>
            <CalculatorContextProvider>
              <Router />
            </CalculatorContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
