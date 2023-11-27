import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* ... other head tags ... */}
          
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
