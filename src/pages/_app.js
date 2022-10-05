import { ProviderAuth } from '@hooks/useAuth';
import Layout from '@containers/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderAuth>
  );
}

export default MyApp;
