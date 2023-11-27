import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
        <Head>
        <title>Green Acres Yardcare - Franklin, TN | Lawn Care and Landscaping Services</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="Green Acres Yardcare in Franklin, TN offers professional lawn care and landscaping services. We are your trusted partner for maintaining a beautiful and healthy yard. Contact us today for expert lawn care solutions."/>
    
        <meta name="keywords" content="Green Acres Yardcare, Franklin TN, lawn care, landscaping, yard maintenance, lawn services, Franklin landscaping, Tennessee yardcare, Middle TN, cutting grass"/>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
    
        <link rel="manifest" href="/manifest.json"/>
        
        <meta property="og:title" content="Green Acres Yardcare - Franklin, TN | Lawn Care and Landscaping Services" />
        <meta property="og:description" content="Green Acres Yardcare in Franklin, TN offers professional lawn care and landscaping services. We are your trusted partner for maintaining a beautiful and healthy yard. Contact us today for expert lawn care solutions." />
        <meta property="og:url" content="https://www.greenacresyardcare.com/" />
          {/* External CSS file */}
          <link href="/static/css/main.297332fa.css" rel="stylesheet" />

          {/* Open Graph and other meta tags can also go here */}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* External JS Script */}
          <script defer src="/static/js/main.5a88ceb6.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
