import { ThemeProvider } from 'styled-components';
import { base, main } from '../styles/Theme';
import GlobalStyles from '../styles/GlobalStyles';

const theme = { ...base, colors: main };

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
