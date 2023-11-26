// pages/_app.js
import '../styles/_app.css'; // Global CSS
import '../styles/globals.css';
import '../styles/notfound.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
