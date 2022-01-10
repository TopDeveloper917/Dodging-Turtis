import type { AppProps } from 'next/app';
import { StoreProvider } from '../store';
import '../styles/main.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
