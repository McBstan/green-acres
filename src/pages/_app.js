// pages/_app.js
import '../styles/_app.css'; // Global CSS
import '../styles/globals.css';
import '../styles/notfound.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';



function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider>
      <Head>
      <title>GreenAcres Yardcare - Franklin, TN | Lawn Care and Landscaping Services</title>
      </Head>
      <Navbar />
      <ScrollToTop />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
